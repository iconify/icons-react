import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3bjx8slg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3bjx8slg"/>`,
		"fallback": "pinhead:canoe-and-tag",
	});
}

export default Component;
