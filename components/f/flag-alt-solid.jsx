import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8nmwqbto.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8nmwqbto"/>`,
		"fallback": "teenyicons:flag-alt-solid",
	});
}

export default Component;
