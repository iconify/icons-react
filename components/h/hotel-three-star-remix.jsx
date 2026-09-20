import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avozh9b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="avozh9b2h"/>`,
		"fallback": "streamline-sharp:hotel-three-star-remix",
	});
}

export default Component;
