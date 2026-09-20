import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re-flo1hm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re-flo1hm"/>`,
		"fallback": "pinhead:988",
	});
}

export default Component;
