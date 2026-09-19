import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta5b9vw8g.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta5b9vw8g"/>`,
		"fallback": "fontisto:day-snow",
	});
}

export default Component;
