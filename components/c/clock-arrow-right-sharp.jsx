import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-n6fq1ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-n6fq1ay"/>`,
		"fallback": "keyline-icons:clock-arrow-right-sharp",
	});
}

export default Component;
