import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dema-c8ir.css';
import '../../css/k/kemjtxbzd.css';
import '../../css/v/vgh1y6bdo.css';
import '../../css/e/eq3m_fbht.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/g/g6bzx12wr.css';
import '../../css/q/qa1td07xs.css';
import '../../css/q/qigvmjaac.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dema-c8ir"/><ellipse class="kemjtxbzd"/><path class="vgh1y6bdo"/><path class="eq3m_fbht"/><g class="doj9dq_jg"><path class="g6bzx12wr"/><path class="qa1td07xs"/><ellipse class="qigvmjaac"/></g>`,
		"fallback": "openmoji:ice-hockey",
	});
}

export default Component;
