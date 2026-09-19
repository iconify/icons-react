import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcf7zrb0f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcf7zrb0f"/>`,
		"fallback": "bi:cake2",
	});
}

export default Component;
