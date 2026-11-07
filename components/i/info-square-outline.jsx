import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hexx2yb1s.css';
import '../../css/e/epahso09d.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hexx2yb1s"/><path class="epahso09d"/><path clip-rule="evenodd" class="g4e643m4g"/>`,
		"fallback": "solar:info-square-outline",
	});
}

export default Component;
