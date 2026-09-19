import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq1_nmbap.css';
import '../../css/v/vd0yurcnj.css';
import '../../css/w/wgnfps2so.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq1_nmbap"/><path class="vd0yurcnj"/><path class="wgnfps2so"/>`,
		"fallback": "devicon:apify",
	});
}

export default Component;
