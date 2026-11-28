import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugwp1vfjm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugwp1vfjm"/>`,
		"fallback": "pinhead:dispensing-machine-with-handled-teacup-and-saucer",
	});
}

export default Component;
