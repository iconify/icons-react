import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do_pfxbkx.css';
import '../../css/a/axkbbdceq.css';
import '../../css/n/na28fgbmu.css';
import '../../css/f/f301-ebqg.css';
import '../../css/n/n8aeu1bkt.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/a4_98xb_j.css';
import '../../css/h/h-r0hxboz.css';
import '../../css/j/jewgnob1o.css';
import '../../css/i/irzq_ebfk.css';
import '../../css/g/gacemqb2a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do_pfxbkx"/><path class="axkbbdceq"/><path class="na28fgbmu"/><path class="f301-ebqg"/><path class="n8aeu1bkt"/><g class="x8poo_bjf"><path class="a4_98xb_j"/><path class="h-r0hxboz"/><path class="jewgnob1o"/><path class="irzq_ebfk"/><path class="gacemqb2a"/></g>`,
		"fallback": "openmoji:closed-mailbox-with-lowered-flag",
	});
}

export default Component;
