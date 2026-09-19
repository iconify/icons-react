import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf2e-874i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uf2e-874i"/>`,
		"fallback": "gg:glass-alt",
	});
}

export default Component;
