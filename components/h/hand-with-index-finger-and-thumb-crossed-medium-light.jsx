import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjjkgobzp.css';
import '../../css/r/rj59v4bex.css';
import '../../css/m/mw383ebtg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjjkgobzp"/><path class="rj59v4bex"/><path class="mw383ebtg"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-medium-light",
	});
}

export default Component;
