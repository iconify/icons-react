import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky3unnbnu.css';

const viewBox = {"width":342,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky3unnbnu"/>`,
		"fallback": "file-icons:coq",
	});
}

export default Component;
