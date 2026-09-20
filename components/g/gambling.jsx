import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/k0894acco.css';
import '../../css/g/g4fhcn7zq.css';
import '../../css/q/qpozp3bki.css';
import '../../css/m/mh4w4pbsw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="k0894acco"/><path class="g4fhcn7zq"/><path class="qpozp3bki"/><path class="mh4w4pbsw"/></g>`,
		"fallback": "streamline-flex:gambling",
	});
}

export default Component;
