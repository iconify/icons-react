import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doy9r2tnq.css';
import '../../css/z/z5bx1-wjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doy9r2tnq"/><path class="z5bx1-wjc"/>`,
		"fallback": "tdesign:bookmark-checked-filled",
	});
}

export default Component;
