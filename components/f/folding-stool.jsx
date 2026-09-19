import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/czcprh0jc.css';
import '../../css/n/nsyzzsboq.css';
import '../../css/c/cvgy3_b5r.css';
import '../../css/i/ipcm43bxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="czcprh0jc"/><path class="nsyzzsboq"/><path class="cvgy3_b5r"/><path class="ipcm43bxh"/></g>`,
		"fallback": "pepicons:folding-stool",
	});
}

export default Component;
