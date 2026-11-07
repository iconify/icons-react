import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ksbpbqc.css';
import '../../css/v/vg7-w1t_u.css';
import '../../css/w/wsqg-_8tu.css';
import '../../css/l/lzc15j6kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ksbpbqc"/><path class="vg7-w1t_u"/><path clip-rule="evenodd" class="wsqg-_8tu"/><path class="lzc15j6kx"/>`,
		"fallback": "solar:clapperboard-play-bold",
	});
}

export default Component;
