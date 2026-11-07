import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i58hs0j8m.css';
import '../../css/l/l-lriixbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i58hs0j8m"/><path clip-rule="evenodd" class="l-lriixbk"/>`,
		"fallback": "solar:bag-music-2-bold",
	});
}

export default Component;
