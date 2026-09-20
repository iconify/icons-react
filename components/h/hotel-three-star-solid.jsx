import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvghow68r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvghow68r"/>`,
		"fallback": "streamline-sharp:hotel-three-star-solid",
	});
}

export default Component;
