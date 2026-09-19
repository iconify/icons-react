import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4uniuwgt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4uniuwgt"/>`,
		"fallback": "fa7-regular:face-grin-squint",
	});
}

export default Component;
