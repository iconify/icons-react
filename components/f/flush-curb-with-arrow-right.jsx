import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfk3dfb7y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfk3dfb7y"/>`,
		"fallback": "pinhead:flush-curb-with-arrow-right",
	});
}

export default Component;
