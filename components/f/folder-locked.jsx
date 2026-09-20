import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfp3zcp8d.css';
import '../../css/u/uomoltbpf.css';
import '../../css/a/ae_julbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfp3zcp8d"/><path class="uomoltbpf"/><path class="ae_julbvj"/></g>`,
		"fallback": "tdesign:folder-locked",
	});
}

export default Component;
