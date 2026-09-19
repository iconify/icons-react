import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sktsi7btg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sktsi7btg"/>`,
		"fallback": "heroicons-solid:bookmark-slash",
	});
}

export default Component;
