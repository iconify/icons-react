import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-3d572jk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g-3d572jk"/>`,
		"fallback": "gravity-ui:arrow-up-from-square",
	});
}

export default Component;
