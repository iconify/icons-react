import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ksbpbqc.css';
import '../../css/v/vg7-w1t_u.css';
import '../../css/v/vuwu2hbcy.css';
import '../../css/l/lzc15j6kx.css';
import '../../css/r/rxrkzxbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ksbpbqc"/><path class="vg7-w1t_u"/><path class="vuwu2hbcy"/><path class="lzc15j6kx"/><path clip-rule="evenodd" class="rxrkzxbgd"/>`,
		"fallback": "solar:clapperboard-edit-bold",
	});
}

export default Component;
