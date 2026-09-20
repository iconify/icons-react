import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkn6_o_df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkn6_o_df"/>`,
		"fallback": "mingcute:gift-card-line",
	});
}

export default Component;
