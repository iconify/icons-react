import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzmz5lhhq.css';
import '../../css/b/b428vo3vo.css';
import '../../css/d/d63rx-b0w.css';
import '../../css/j/jb_udgldo.css';
import '../../css/q/qbgl7c1ia.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/g/gk0b5-bqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uzmz5lhhq"/><path class="b428vo3vo"/><path class="d63rx-b0w"/><path class="jb_udgldo"/><path class="qbgl7c1ia"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="gk0b5-bqj"/></g>`,
		"fallback": "fluent-emoji-flat:child-medium",
	});
}

export default Component;
