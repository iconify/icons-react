import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cickl6b4l.css';
import '../../css/i/i8f6vsb_g.css';
import '../../css/n/n8gcj1byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cickl6b4l"/><path class="i8f6vsb_g"/><path class="n8gcj1byj"/>`,
		"fallback": "mage:instagram-circle",
	});
}

export default Component;
