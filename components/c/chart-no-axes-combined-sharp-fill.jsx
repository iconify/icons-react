import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rem1nn86g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rem1nn86g"/>`,
		"fallback": "keyline-icons:chart-no-axes-combined-sharp-fill",
	});
}

export default Component;
