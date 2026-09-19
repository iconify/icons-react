import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqyo_428x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqyo_428x"/>`,
		"fallback": "entypo-social:flickr-with-circle",
	});
}

export default Component;
