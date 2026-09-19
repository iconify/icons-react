import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5dznj9-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5dznj9-n"/>`,
		"fallback": "icomoon-free:css3",
	});
}

export default Component;
