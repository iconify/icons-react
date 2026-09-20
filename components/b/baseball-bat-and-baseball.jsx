import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjbo7ppxv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjbo7ppxv"/>`,
		"fallback": "pinhead:baseball-bat-and-baseball",
	});
}

export default Component;
