import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghewddvaz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghewddvaz"/>`,
		"fallback": "f7:bars",
	});
}

export default Component;
