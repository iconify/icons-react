import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za2b7ublj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za2b7ublj"/>`,
		"fallback": "pinhead:icicles",
	});
}

export default Component;
