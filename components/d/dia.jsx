import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr9cd_urf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr9cd_urf"/>`,
		"fallback": "file-icons:dia",
	});
}

export default Component;
