import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf1c1hbcj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf1c1hbcj"/>`,
		"fallback": "fluent-mdl2:delete-rows",
	});
}

export default Component;
