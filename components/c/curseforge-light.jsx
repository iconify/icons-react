import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj_40jb1k.css';

const viewBox = {"width":260,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj_40jb1k"/>`,
		"fallback": "thesvg-color:curseforge-light",
	});
}

export default Component;
