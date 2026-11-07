import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmiwmz8tp.css';
import '../../css/y/yat6fclko.css';
import '../../css/l/lzc15j6kx.css';
import '../../css/h/hh0k1-0jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmiwmz8tp"/><path class="yat6fclko"/><path class="lzc15j6kx"/><path class="hh0k1-0jo"/>`,
		"fallback": "solar:clapperboard-bold",
	});
}

export default Component;
