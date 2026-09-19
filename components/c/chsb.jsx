import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm572wv6a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm572wv6a"/>`,
		"fallback": "cryptocurrency:chsb",
	});
}

export default Component;
