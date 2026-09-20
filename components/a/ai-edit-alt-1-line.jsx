import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq303r2fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq303r2fd"/>`,
		"fallback": "si:ai-edit-alt-1-line",
	});
}

export default Component;
