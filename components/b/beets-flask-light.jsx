import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9hmh0b9g.css';
import '../../css/u/ujufagbba.css';
import '../../css/s/s8i3jsm2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f9hmh0b9g"/><path class="ujufagbba"/><path class="s8i3jsm2k"/>`,
		"fallback": "selfhst:beets-flask-light",
	});
}

export default Component;
