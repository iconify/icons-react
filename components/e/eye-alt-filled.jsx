import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymz-vs81r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymz-vs81r"/>`,
		"fallback": "boxicons:eye-alt-filled",
	});
}

export default Component;
