import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzedr8b4v.css';
import '../../css/c/c7t37fq_c.css';
import '../../css/e/e_lx61bbx.css';
import '../../css/a/aoh1nrwpm.css';
import '../../css/b/b-7vt5iyv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzedr8b4v"/><path class="c7t37fq_c"/><path class="e_lx61bbx"/><path class="aoh1nrwpm"/><path class="b-7vt5iyv"/></g>`,
		"fallback": "fluent-emoji-flat:dove",
	});
}

export default Component;
