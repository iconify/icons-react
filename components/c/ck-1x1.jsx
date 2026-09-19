import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x55socblr.css';
import '../../css/k/kqj2ust1n.css';
import '../../css/t/tuoz2rmbp.css';
import '../../css/a/awlrmcc1r.css';
import '../../css/o/oz5r71bsf.css';
import '../../css/z/z5d3n1byp.css';
import '../../css/g/gvzoyzbzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x55socblr"/><path class="kqj2ust1n"/><path class="tuoz2rmbp"/><path class="awlrmcc1r"/><path class="oz5r71bsf"/><path class="z5d3n1byp"/><path class="gvzoyzbzj"/>`,
		"fallback": "flag:ck-1x1",
	});
}

export default Component;
