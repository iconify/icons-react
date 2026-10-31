import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hp-f7n9ml.css';
import '../../css/v/vdobf5dnk.css';
import '../../css/d/d-x4hkpdv.css';
import '../../css/n/n4w1awbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hp-f7n9ml wm-shadow"/><path class="vdobf5dnk wm-shadow"/><path class="d-x4hkpdv"/><path class="n4w1awbdf"/></g>`,
		"fallback": "withicons-brutal:cursor",
	});
}

export default Component;
