import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooxgz1bqy.css';
import '../../css/e/e_2-vrb9c.css';
import '../../css/u/undhzu90l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ooxgz1bqy"/><path class="e_2-vrb9c"/><path class="undhzu90l"/></g>`,
		"fallback": "streamline-ultimate-color:casino-lucky-7",
	});
}

export default Component;
