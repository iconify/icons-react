import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewe7up6bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewe7up6bq"/>`,
		"fallback": "heroicons-outline:currency-dollar",
	});
}

export default Component;
