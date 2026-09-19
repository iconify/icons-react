import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jd6rb2bqi.css';
import '../../css/o/ot64qpusw.css';
import '../../css/r/r-wfn_bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="image-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="jd6rb2bqi"/><path clip-rule="evenodd" class="ot64qpusw"/><path class="r-wfn_bmu"/></g></g>`,
		"fallback": "cuida:image-outline",
	});
}

export default Component;
