import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5-lgcc0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5-lgcc0a"/>`,
		"fallback": "heroicons-solid:identification",
	});
}

export default Component;
