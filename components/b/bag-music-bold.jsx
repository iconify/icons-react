import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gttxmhbqp.css';
import '../../css/p/pa47kd49e.css';
import '../../css/s/skxbewbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gttxmhbqp"/><path class="pa47kd49e"/><path clip-rule="evenodd" class="skxbewbgp"/>`,
		"fallback": "solar:bag-music-bold",
	});
}

export default Component;
