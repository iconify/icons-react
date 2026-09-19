import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljvms9jzg.css';
import '../../css/u/u8xsetbyt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ljvms9jzg"/><path clip-rule="evenodd" class="u8xsetbyt"/></g>`,
		"fallback": "fluent-emoji-flat:hair-pick",
	});
}

export default Component;
