import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwzk-nyrw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwzk-nyrw"/>`,
		"fallback": "uiw:chrome",
	});
}

export default Component;
