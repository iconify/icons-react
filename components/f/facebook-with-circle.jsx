import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_6afjkun.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_6afjkun"/>`,
		"fallback": "entypo-social:facebook-with-circle",
	});
}

export default Component;
