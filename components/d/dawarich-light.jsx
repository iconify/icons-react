import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdtzqfxwt.css';
import '../../css/j/jk619tm-u.css';
import '../../css/w/wm7ofvb7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdtzqfxwt"/><path class="jk619tm-u"/><path class="wm7ofvb7g"/>`,
		"fallback": "selfhst:dawarich-light",
	});
}

export default Component;
