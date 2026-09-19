import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1uus8zrf.css';
import '../../css/z/zzmml7btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1uus8zrf"/><path class="zzmml7btc"/>`,
		"fallback": "boxicons:bird",
	});
}

export default Component;
