import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cll0qtbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cll0qtbbd"/>`,
		"fallback": "thesvg-color:fig",
	});
}

export default Component;
