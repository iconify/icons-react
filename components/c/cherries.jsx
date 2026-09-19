import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kb-ct1bsw.css';
import '../../css/k/k2ltbsbju.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kb-ct1bsw"/><path clip-rule="evenodd" class="k2ltbsbju"/></g>`,
		"fallback": "fluent-emoji-flat:cherries",
	});
}

export default Component;
