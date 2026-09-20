import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdkdccu0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdkdccu0q"/>`,
		"fallback": "pinhead:car-under-checkmark",
	});
}

export default Component;
