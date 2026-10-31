import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0-ptubdh.css';
import '../../css/s/sjmjdxbfs.css';
import '../../css/s/sq1b530py.css';
import '../../css/l/l40tdpssu.css';
import '../../css/f/fklb1hbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c0-ptubdh wm-shadow"/><path class="sjmjdxbfs wm-shadow"/><path class="sq1b530py"/><path class="l40tdpssu"/><path class="fklb1hbiz"/></g>`,
		"fallback": "withicons-brutal:hospital",
	});
}

export default Component;
