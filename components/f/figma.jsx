import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/e/ewabcgb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4)" class="n1lsf0bnc"><circle class="aqhok2bbj"/><path class="ewabcgb4m"/></g>`,
		"fallback": "grommet-icons:figma",
	});
}

export default Component;
