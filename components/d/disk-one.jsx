import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/g96sazbxl.css';
import '../../css/q/qoebb6b-x.css';
import '../../css/f/fxsft62au.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIVSQUd5t"><g class="v3_i3wktz"><path class="g96sazbxl"/><path class="qoebb6b-x"/><path class="fxsft62au"/></g></mask></defs><path mask="url(#SVGIVSQUd5t)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:disk-one",
	});
}

export default Component;
