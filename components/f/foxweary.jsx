import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fac77ybxs.css';
import '../../css/t/t8vk-tb8q.css';
import '../../css/k/kpe7unnah.css';
import '../../css/f/ft6wmtbwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fac77ybxs"/><path class="t8vk-tb8q"/><path class="kpe7unnah"/><path class="ft6wmtbwh"/>`,
		"fallback": "fxemoji:foxweary",
	});
}

export default Component;
