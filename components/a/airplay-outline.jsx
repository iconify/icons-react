import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrvn70_6q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrvn70_6q"/>`,
		"fallback": "teenyicons:airplay-outline",
	});
}

export default Component;
