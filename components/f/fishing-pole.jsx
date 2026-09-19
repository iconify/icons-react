import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk6koxe0y.css';
import '../../css/r/rgqth6bmf.css';
import '../../css/a/acsgaxbac.css';
import '../../css/f/f0n566bdn.css';
import '../../css/f/f24h4jbzw.css';
import '../../css/z/z0gbxnb-x.css';
import '../../css/o/o2-ytxb7v.css';
import '../../css/q/qksbg1m9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pk6koxe0y"/><path class="rgqth6bmf"/><path class="acsgaxbac"/><path class="f0n566bdn"/><path class="f24h4jbzw"/><path class="z0gbxnb-x"/><path class="o2-ytxb7v"/><path class="qksbg1m9k"/></g>`,
		"fallback": "fluent-emoji-flat:fishing-pole",
	});
}

export default Component;
