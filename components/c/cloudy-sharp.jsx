import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sew8kkscr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sew8kkscr"/>`,
		"fallback": "famicons:cloudy-sharp",
	});
}

export default Component;
