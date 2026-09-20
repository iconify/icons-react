import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gepdwrb2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gepdwrb2g"/>`,
		"fallback": "pinhead:carpet",
	});
}

export default Component;
