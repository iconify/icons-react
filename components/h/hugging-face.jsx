import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/l/ll6xmympj.css';
import '../../css/p/p4xm5hb2z.css';
import '../../css/z/z04drlb1l.css';
import '../../css/d/d0nwihbrn.css';
import '../../css/l/lsply5tpo.css';
import '../../css/d/dtsu3kb3a.css';
import '../../css/b/bwdb66byk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="ll6xmympj"/><path class="p4xm5hb2z"/></g><g class="z04drlb1l"><path class="d0nwihbrn"/><path class="lsply5tpo"/><path class="dtsu3kb3a"/><path class="bwdb66byk"/></g>`,
		"fallback": "openmoji:hugging-face",
	});
}

export default Component;
