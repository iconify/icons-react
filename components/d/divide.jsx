import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r40p3-bij.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r40p3-bij"/>`,
		"fallback": "f7:divide",
	});
}

export default Component;
