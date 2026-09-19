import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-p39nbob.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-p39nbob"/>`,
		"fallback": "fa7-solid:aquarius",
	});
}

export default Component;
