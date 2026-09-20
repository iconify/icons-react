import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ditspb6yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ditspb6yu"/>`,
		"fallback": "streamline-sharp:ice-cream-1-solid",
	});
}

export default Component;
