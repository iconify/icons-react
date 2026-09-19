import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/evtdzvqnx.css';
import '../../css/a/ay5wwjbqg.css';
import '../../css/z/za3ckd01w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="evtdzvqnx"/><path class="ay5wwjbqg"/><path class="za3ckd01w"/></g>`,
		"fallback": "glyphs-poly:bars",
	});
}

export default Component;
