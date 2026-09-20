import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_1627bue.css';
import '../../css/q/qatg1tb-z.css';
import '../../css/b/bpawmfb4h.css';
import '../../css/h/hi08am92c.css';
import '../../css/o/oq7ps8cto.css';
import '../../css/f/f45euabxj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_1627bue"/><path class="qatg1tb-z"/><path class="bpawmfb4h"/><path class="hi08am92c"/><path class="oq7ps8cto"/><path class="f45euabxj"/></g>`,
		"fallback": "streamline-flex-color:graduation-cap",
	});
}

export default Component;
