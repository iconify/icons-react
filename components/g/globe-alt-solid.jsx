import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1h9t678t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1h9t678t"/>`,
		"fallback": "heroicons:globe-alt-solid",
	});
}

export default Component;
