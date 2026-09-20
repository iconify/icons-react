import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brfbl6fbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brfbl6fbx"/>`,
		"fallback": "qlementine-icons:eye-crossed-16",
	});
}

export default Component;
