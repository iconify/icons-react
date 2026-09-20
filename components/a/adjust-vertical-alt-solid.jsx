import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htu_6ab6k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htu_6ab6k"/>`,
		"fallback": "teenyicons:adjust-vertical-alt-solid",
	});
}

export default Component;
