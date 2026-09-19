import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fke0mqvba.css';
import '../../css/i/i1csjxczh.css';
import '../../css/m/mmihhqb4j.css';
import '../../css/h/hro7jmdmo.css';
import '../../css/s/sp0yzi5yt.css';
import '../../css/j/jqcln4b3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fke0mqvba"/><path class="i1csjxczh"/><path class="mmihhqb4j"/><circle class="hro7jmdmo"/><path class="sp0yzi5yt"/><path class="jqcln4b3n"/>`,
		"fallback": "fxemoji:cherryblossom",
	});
}

export default Component;
