import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd0_zwbpj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kd0_zwbpj"/>`,
		"fallback": "pajamas:close-xs",
	});
}

export default Component;
