import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzcw9_93q.css';
import '../../css/g/g5jsjs0du.css';
import '../../css/n/n2aw37isc.css';
import '../../css/f/fpcwq9bdh.css';
import '../../css/m/mva_4dbqe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dzcw9_93q"/><path class="g5jsjs0du"/><path class="n2aw37isc"/><ellipse transform="rotate(45.156 17.128 15.082)" class="fpcwq9bdh"/><path clip-rule="evenodd" class="mva_4dbqe"/></g>`,
		"fallback": "fluent-emoji-flat:broken-chain",
	});
}

export default Component;
