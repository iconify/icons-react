import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9iwk1bwv.css';
import '../../css/y/yvg5bdcoq.css';
import '../../css/o/oxa7wjbyu.css';
import '../../css/l/lte0itjcq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9iwk1bwv"/><path class="yvg5bdcoq"/><path class="oxa7wjbyu"/><path class="lte0itjcq"/></g>`,
		"fallback": "glyphs:binoculars-duo",
	});
}

export default Component;
