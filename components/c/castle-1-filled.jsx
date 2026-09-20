import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlpvp0iiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlpvp0iiq"/>`,
		"fallback": "tdesign:castle-1-filled",
	});
}

export default Component;
