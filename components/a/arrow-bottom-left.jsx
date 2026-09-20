import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yau_oxycf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yau_oxycf"/>`,
		"fallback": "radix-icons:arrow-bottom-left",
	});
}

export default Component;
