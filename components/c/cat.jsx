import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-hoagbvo.css';
import '../../css/c/c73qp8bvx.css';
import '../../css/k/kynzhrb5e.css';
import '../../css/p/p5umztbln.css';
import '../../css/u/ugza0vbgp.css';
import '../../css/g/gvubfxber.css';
import '../../css/t/tnkugwvsj.css';
import '../../css/f/f0bpylu7v.css';
import '../../css/v/vw-m5fbsh.css';
import '../../css/e/e4tfif0hs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-hoagbvo"/><path class="c73qp8bvx"/><path class="kynzhrb5e"/><circle class="p5umztbln"/><circle class="ugza0vbgp"/><circle class="gvubfxber"/><path class="tnkugwvsj"/><path class="f0bpylu7v"/><path class="vw-m5fbsh"/><path class="e4tfif0hs"/></g>`,
		"fallback": "icon-park:cat",
	});
}

export default Component;
