import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kqv4z2bpq.css';
import '../../css/m/mo8p5dbdf.css';
import '../../css/z/zkce70bzg.css';
import '../../css/s/sl0bk4m9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="kqv4z2bpq"/><path class="mo8p5dbdf"/><path class="zkce70bzg"/><path class="sl0bk4m9t"/></g>`,
		"fallback": "icon-park:desk-lamp",
	});
}

export default Component;
