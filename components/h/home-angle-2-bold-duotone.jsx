import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gswtq35or.css';
import '../../css/e/ewx6owlel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gswtq35or"/><path clip-rule="evenodd" class="ewx6owlel"/>`,
		"fallback": "solar:home-angle-2-bold-duotone",
	});
}

export default Component;
