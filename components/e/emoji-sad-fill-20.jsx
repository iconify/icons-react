import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzlce4mmn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzlce4mmn"/>`,
		"fallback": "garden:emoji-sad-fill-20",
	});
}

export default Component;
