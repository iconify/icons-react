import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rugf8t3bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rugf8t3bq"/>`,
		"fallback": "bxl:css3",
	});
}

export default Component;
