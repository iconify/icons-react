import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwkhj_byj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwkhj_byj"/>`,
		"fallback": "qlementine-icons:cloud-16",
	});
}

export default Component;
