import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_-7kfbwp.css';
import '../../css/v/vq02wtb6u.css';
import '../../css/a/a3c5msjrx.css';
import '../../css/t/t_-0a8axt.css';
import '../../css/f/fv3yvhbmc.css';
import '../../css/i/i-q3i698r.css';
import '../../css/i/ie_1_3b_y.css';
import '../../css/v/vqb6wz31a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_-7kfbwp"/><path class="vq02wtb6u"/><path class="a3c5msjrx"/><path class="t_-0a8axt"/><path class="fv3yvhbmc"/><path class="i-q3i698r"/><path class="ie_1_3b_y"/><path class="vqb6wz31a"/>`,
		"fallback": "catppuccin:blink",
	});
}

export default Component;
