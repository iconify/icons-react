import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv2m99c-n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vv2m99c-n"/>`,
		"fallback": "heroicons:currency-bangladeshi-20-solid",
	});
}

export default Component;
