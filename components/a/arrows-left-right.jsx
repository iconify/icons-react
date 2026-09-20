import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klsc_6f6f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klsc_6f6f"/>`,
		"fallback": "pinhead:arrows-left-right",
	});
}

export default Component;
