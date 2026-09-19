import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqu2aeb_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqu2aeb_f"/>`,
		"fallback": "entypo:creative-commons-noncommercial-eu",
	});
}

export default Component;
