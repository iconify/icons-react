import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg1--abbd.css';
import '../../css/z/zudizmbbe.css';
import '../../css/w/w9b1o0b9t.css';
import '../../css/a/a5k16ccib.css';
import '../../css/p/pxav1kb_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dg1--abbd"/><circle class="zudizmbbe"/><circle class="w9b1o0b9t"/><path class="a5k16ccib"/><path class="pxav1kb_r"/>`,
		"fallback": "carbon:data-backup",
	});
}

export default Component;
