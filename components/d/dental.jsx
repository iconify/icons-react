import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5ym7p8cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5ym7p8cn"/>`,
		"fallback": "tabler:dental",
	});
}

export default Component;
