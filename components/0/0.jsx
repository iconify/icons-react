import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcztpib1d.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcztpib1d"/>`,
		"fallback": "whh:0",
	});
}

export default Component;
