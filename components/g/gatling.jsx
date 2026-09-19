import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiufr8b9j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiufr8b9j"/>`,
		"fallback": "devicon-plain:gatling",
	});
}

export default Component;
