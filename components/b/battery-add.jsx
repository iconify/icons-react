import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckwujhbjq.css';
import '../../css/x/x9jyb3bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ckwujhbjq"/><path class="x9jyb3bkq"/></g>`,
		"fallback": "tdesign:battery-add",
	});
}

export default Component;
