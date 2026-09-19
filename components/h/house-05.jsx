import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zfkc1gbeo.css';
import '../../css/i/iojmo55ly.css';
import '../../css/y/y31lx-nom.css';
import '../../css/f/fht7p77jy.css';
import '../../css/w/wn_trabmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zfkc1gbeo"/><path class="iojmo55ly"/><path class="y31lx-nom"/><path class="fht7p77jy"/><path class="wn_trabmw"/></g>`,
		"fallback": "hugeicons:house-05",
	});
}

export default Component;
