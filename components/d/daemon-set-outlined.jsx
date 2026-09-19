import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu5bcab4r.css';
import '../../css/r/rc_7mwb4l.css';
import '../../css/p/pvoh7sbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu5bcab4r"/><path class="rc_7mwb4l"/><path class="pvoh7sbyh"/>`,
		"fallback": "eos-icons:daemon-set-outlined",
	});
}

export default Component;
