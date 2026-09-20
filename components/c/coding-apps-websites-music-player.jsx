import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-47hnhjw.css';
import '../../css/c/cx30n8b7z.css';
import '../../css/a/a253p2upt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-47hnhjw"/><path class="cx30n8b7z"/><path class="a253p2upt"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-music-player",
	});
}

export default Component;
