import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge0dymbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge0dymbzl"/>`,
		"fallback": "coolicons:file-lock-corner-round",
	});
}

export default Component;
