import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb-bq1nyz.css';
import '../../css/l/lofqyubof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb-bq1nyz"/><path class="lofqyubof"/>`,
		"fallback": "solar:chef-hat-bold",
	});
}

export default Component;
