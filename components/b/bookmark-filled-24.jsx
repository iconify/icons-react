import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft_pidc4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft_pidc4b"/>`,
		"fallback": "qlementine-icons:bookmark-filled-24",
	});
}

export default Component;
