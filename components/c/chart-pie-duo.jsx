import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov163mcoa.css';
import '../../css/n/ns87b5brr.css';
import '../../css/p/peexr3gcd.css';
import '../../css/b/bdjs6u3tg.css';
import '../../css/z/zz2shhbcq.css';
import '../../css/p/pn4z3ybfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ov163mcoa"/><path class="ns87b5brr"/><path class="peexr3gcd"/><path clip-rule="evenodd" class="bdjs6u3tg"/><path class="zz2shhbcq"/><path class="pn4z3ybfj"/></g>`,
		"fallback": "streamline-kameleon-color:chart-pie-duo",
	});
}

export default Component;
