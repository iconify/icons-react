import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9wmphbum.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9wmphbum"/>`,
		"fallback": "fontisto:cloudy",
	});
}

export default Component;
