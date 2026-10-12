import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8498bbc.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8498bbc"/><path class="aqsnv9bnd"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:bookmark-minus-20-bold",
	});
}

export default Component;
