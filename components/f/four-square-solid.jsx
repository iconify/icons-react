import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq56q7baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq56q7baj"/>`,
		"fallback": "mynaui:four-square-solid",
	});
}

export default Component;
