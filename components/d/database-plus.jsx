import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qbhvdvbrl.css';
import '../../css/y/yf7o8narz.css';
import '../../css/t/tlo2r7sql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qbhvdvbrl"/><path class="yf7o8narz"/><path class="tlo2r7sql"/></g>`,
		"fallback": "si-glyph:database-plus",
	});
}

export default Component;
