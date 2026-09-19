import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hysorxn0d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hysorxn0d"/>`,
		"fallback": "f7:house",
	});
}

export default Component;
