import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgf-28bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hgf-28bzj"/>`,
		"fallback": "keyline-icons:cloud-alert-fill",
	});
}

export default Component;
