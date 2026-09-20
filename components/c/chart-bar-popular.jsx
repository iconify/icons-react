import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t00icf71t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t00icf71t"/>`,
		"fallback": "tabler:chart-bar-popular",
	});
}

export default Component;
