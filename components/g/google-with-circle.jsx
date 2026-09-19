import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhfzzxb8w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhfzzxb8w"/>`,
		"fallback": "entypo-social:google-with-circle",
	});
}

export default Component;
