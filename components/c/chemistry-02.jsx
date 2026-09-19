import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/to1cgjbzi.css';
import '../../css/p/phhpl4biy.css';
import '../../css/y/y60xx1bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="to1cgjbzi"/><path class="phhpl4biy"/><path class="y60xx1bkg"/></g>`,
		"fallback": "hugeicons:chemistry-02",
	});
}

export default Component;
