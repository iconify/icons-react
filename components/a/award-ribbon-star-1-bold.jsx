import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byfcc--4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byfcc--4j"/>`,
		"fallback": "streamline-ultimate:award-ribbon-star-1-bold",
	});
}

export default Component;
