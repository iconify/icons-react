import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_eg9t9sm.css';
import '../../css/m/mw3jqjowb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_eg9t9sm"/><path class="mw3jqjowb"/>`,
		"fallback": "selfhst:grimoire-ttrpg",
	});
}

export default Component;
