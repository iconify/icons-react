import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/far50iw7l.css';
import '../../css/f/fs0yrab0m.css';
import '../../css/h/hffkpbehn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="far50iw7l wm-k"/><path class="fs0yrab0m wm-a"/><path class="hffkpbehn wm-a"/>`,
		"fallback": "withicons-bauhaus:disc",
	});
}

export default Component;
