import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a933zeb1a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a933zeb1a"/>`,
		"fallback": "heroicons-solid:arrow-circle-left",
	});
}

export default Component;
