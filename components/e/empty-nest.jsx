import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud9-v_bvx.css';
import '../../css/k/kxhaatbqf.css';
import '../../css/r/r3v6i6bdw.css';
import '../../css/g/g4zd1bbwn.css';
import '../../css/w/wwy7_uphj.css';
import '../../css/q/q5ej3sgxs.css';
import '../../css/t/tm9bdhbpd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud9-v_bvx"/><path class="kxhaatbqf"/><ellipse class="r3v6i6bdw"/><path class="g4zd1bbwn"/><path class="wwy7_uphj"/><path class="q5ej3sgxs"/><ellipse class="tm9bdhbpd"/>`,
		"fallback": "openmoji:empty-nest",
	});
}

export default Component;
