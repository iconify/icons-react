import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta0fvvbco.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta0fvvbco"/>`,
		"fallback": "system-uicons:film",
	});
}

export default Component;
