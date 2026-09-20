import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyxd_0z0f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyxd_0z0f"/>`,
		"fallback": "pinhead:hairy-caterpillar",
	});
}

export default Component;
