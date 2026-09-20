import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9wvh02vu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9wvh02vu"/>`,
		"fallback": "teenyicons:info-circle-solid",
	});
}

export default Component;
