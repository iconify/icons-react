import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l20n-1ngj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l20n-1ngj"/>`,
		"fallback": "heroicons-solid:gift-top",
	});
}

export default Component;
