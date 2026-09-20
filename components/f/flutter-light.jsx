import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/h/hy9wdx43l.css';
import '../../css/q/qb_-_ru-a.css';
import '../../css/u/ucd0njbco.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="hy9wdx43l"/><path class="qb_-_ru-a"/><path class="ucd0njbco"/></g>`,
		"fallback": "skill-icons:flutter-light",
	});
}

export default Component;
