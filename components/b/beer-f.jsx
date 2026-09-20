import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq0lnlb2z.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq0lnlb2z"/>`,
		"fallback": "jam:beer-f",
	});
}

export default Component;
