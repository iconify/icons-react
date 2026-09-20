import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3gyipbkp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3gyipbkp"/>`,
		"fallback": "pinhead:dog-sitting-and-question-mark",
	});
}

export default Component;
