import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aprofgbex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aprofgbex"/>`,
		"fallback": "file-icons:ats",
	});
}

export default Component;
