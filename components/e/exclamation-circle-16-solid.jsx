import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb3mgp2iu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hb3mgp2iu"/>`,
		"fallback": "heroicons:exclamation-circle-16-solid",
	});
}

export default Component;
