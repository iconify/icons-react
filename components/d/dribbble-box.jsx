import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp17d_muq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp17d_muq"/>`,
		"fallback": "mdi:dribbble-box",
	});
}

export default Component;
