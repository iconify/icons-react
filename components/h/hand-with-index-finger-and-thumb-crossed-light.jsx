import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztj5prbss.css';
import '../../css/z/z7oqzzbjb.css';
import '../../css/i/i8zwbnb2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztj5prbss"/><path class="z7oqzzbjb"/><path class="i8zwbnb2d"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-light",
	});
}

export default Component;
