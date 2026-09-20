import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkmmjsq7w.css';
import '../../css/l/lj5wj6bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mkmmjsq7w"/><path class="lj5wj6bpe"/></g>`,
		"fallback": "tdesign:book",
	});
}

export default Component;
