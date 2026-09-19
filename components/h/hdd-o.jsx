import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm2t39b3j.css';

const viewBox = {"width":1536,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm2t39b3j"/>`,
		"fallback": "fa:hdd-o",
	});
}

export default Component;
