import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pscsd7cnf.css';
import '../../css/n/nhf2ek9tk.css';
import '../../css/o/otvh6hb-j.css';
import '../../css/w/w0fjcgbpq.css';
import '../../css/r/r5n5-lbvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pscsd7cnf"/><path class="nhf2ek9tk"/><path class="otvh6hb-j"/><path class="w0fjcgbpq"/><path class="r5n5-lbvb"/>`,
		"fallback": "streamline-pixel:hand-zombie",
	});
}

export default Component;
