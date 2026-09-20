import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulv5tg40c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ulv5tg40c"/>`,
		"fallback": "streamline-sharp:delete-2-remix",
	});
}

export default Component;
