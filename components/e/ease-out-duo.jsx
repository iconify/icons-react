import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usb52b63m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imwmxwxdg.css';
import '../../css/p/p5yi_xv5c.css';
import '../../css/b/b0zv3cjwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary usb52b63m"/><g class="dt0cm9dhy primary"><path class="imwmxwxdg"/><path class="p5yi_xv5c"/><path class="b0zv3cjwz"/></g>`,
		"fallback": "iconaut:ease-out-duo",
	});
}

export default Component;
