import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn48uir4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn48uir4a"/>`,
		"fallback": "tabler:brand-monday",
	});
}

export default Component;
