import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvra6zb6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvra6zb6u"/>`,
		"fallback": "icomoon-free:angry",
	});
}

export default Component;
