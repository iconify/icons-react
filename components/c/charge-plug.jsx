import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3hw2ni_j.css';
import '../../css/y/yhr3o3bwa.css';
import '../../css/t/tjvf3bbuc.css';
import '../../css/b/b6nkj5b3e.css';
import '../../css/z/z58qsnuvq.css';
import '../../css/q/qg8nm9thv.css';
import '../../css/z/z04drlb1l.css';
import '../../css/w/whglabc3a.css';
import '../../css/c/cafilj5qr.css';
import '../../css/x/x4saoidsl.css';
import '../../css/l/l8n5w0w0v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3hw2ni_j"/><path class="yhr3o3bwa"/><path class="tjvf3bbuc"/><path class="b6nkj5b3e"/><path class="z58qsnuvq"/><path class="qg8nm9thv"/><g class="z04drlb1l"><path class="whglabc3a"/><path class="cafilj5qr"/><path class="x4saoidsl"/><path class="l8n5w0w0v"/></g>`,
		"fallback": "openmoji:charge-plug",
	});
}

export default Component;
