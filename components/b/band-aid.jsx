import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_66s4b0b.css';
import '../../css/d/dwwqc9d1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_66s4b0b"/><path class="dwwqc9d1x"/>`,
		"fallback": "boxicons:band-aid",
	});
}

export default Component;
