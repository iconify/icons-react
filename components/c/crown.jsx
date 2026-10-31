import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tugfszw2c.css';
import '../../css/u/ui1vvxinh.css';
import '../../css/g/g9p5-xl9p.css';
import '../../css/c/c4cdtjxrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tugfszw2c wm-shadow"/><path class="ui1vvxinh"/><path class="g9p5-xl9p"/><path class="c4cdtjxrf"/></g>`,
		"fallback": "withicons-retro:crown",
	});
}

export default Component;
