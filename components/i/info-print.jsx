import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hmoflfbyj.css';
import '../../css/p/pqut-kb5t.css';
import '../../css/o/ofvdkz2ve.css';
import '../../css/m/mr8m7nbzf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="hmoflfbyj"/><path class="pqut-kb5t"/></g><path clip-rule="evenodd" class="ofvdkz2ve"/><path class="mr8m7nbzf"/></g>`,
		"fallback": "pepicons:info-print",
	});
}

export default Component;
