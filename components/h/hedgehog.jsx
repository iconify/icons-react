import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-3a5bbik.css';
import '../../css/b/bsqcx1bor.css';
import '../../css/o/oggwxdwdm.css';
import '../../css/o/os9ahhbmr.css';
import '../../css/a/ahbanjx3m.css';
import '../../css/n/np05gjbzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-3a5bbik"/><path class="bsqcx1bor"/><path class="oggwxdwdm"/><path class="os9ahhbmr"/><path class="ahbanjx3m"/><path class="np05gjbzu"/></g>`,
		"fallback": "fluent-emoji-flat:hedgehog",
	});
}

export default Component;
