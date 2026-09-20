import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwqzm5qkf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwqzm5qkf"/>`,
		"fallback": "pinhead:arrows-bottom-left-top-right",
	});
}

export default Component;
