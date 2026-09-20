import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xih3-epmf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xih3-epmf"/>`,
		"fallback": "pinhead:five-plus-over-water",
	});
}

export default Component;
