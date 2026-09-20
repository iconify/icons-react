import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9lzej0dp.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9lzej0dp"/>`,
		"fallback": "maki:building-alt1-11",
	});
}

export default Component;
