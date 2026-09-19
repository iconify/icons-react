import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njsgzcc0r.css';
import '../../css/l/lkugdybit.css';
import '../../css/e/ew6j5etob.css';
import '../../css/j/jb_udgldo.css';
import '../../css/b/b1xaj94jr.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/c/cdcjgwj5q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="njsgzcc0r"/><path class="lkugdybit"/><path class="ew6j5etob"/><path class="jb_udgldo"/><path class="b1xaj94jr"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="cdcjgwj5q"/></g>`,
		"fallback": "fluent-emoji-flat:child-light",
	});
}

export default Component;
