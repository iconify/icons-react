import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao7jv8aag.css';
import '../../css/o/ouxiombbt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao7jv8aag"/><path clip-rule="evenodd" class="ouxiombbt"/>`,
		"fallback": "teenyicons:deno-solid",
	});
}

export default Component;
