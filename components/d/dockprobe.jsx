import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs9eo6b4e.css';
import '../../css/y/yzd238b6t.css';
import '../../css/n/nymd4fbcf.css';
import '../../css/o/om9mvtbvw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGhIYX7HaZ" x1="11.497" x2="500.503" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="cs9eo6b4e"/><stop offset="1" class="cs9eo6b4e"/></linearGradient><path fill="url(#SVGhIYX7HaZ)" class="yzd238b6t"/><path class="nymd4fbcf"/><path class="om9mvtbvw"/>`,
		"fallback": "selfhst:dockprobe",
	});
}

export default Component;
