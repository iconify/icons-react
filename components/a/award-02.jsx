import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gupi_7glt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gupi_7glt"/>`,
		"fallback": "hugeicons:award-02",
	});
}

export default Component;
