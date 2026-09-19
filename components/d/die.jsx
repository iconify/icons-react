import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h14emmvzq.css';
import '../../css/g/gepctrpsq.css';
import '../../css/c/cix91lbno.css';
import '../../css/m/mq2p3ubdo.css';
import '../../css/a/az9f79b4l.css';
import '../../css/d/deryr5bon.css';
import '../../css/w/wmf6bfl_i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="h14emmvzq"/><rect class="gepctrpsq"/><rect class="cix91lbno"/><rect class="mq2p3ubdo"/><rect class="az9f79b4l"/><rect class="deryr5bon"/><rect class="wmf6bfl_i"/></g>`,
		"fallback": "glyphs-poly:die",
	});
}

export default Component;
