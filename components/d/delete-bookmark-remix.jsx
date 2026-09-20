import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha4e2vb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha4e2vb9v"/>`,
		"fallback": "streamline-sharp:delete-bookmark-remix",
	});
}

export default Component;
