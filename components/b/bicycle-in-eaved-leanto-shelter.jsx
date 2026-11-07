import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svsjy1b4j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svsjy1b4j"/>`,
		"fallback": "pinhead:bicycle-in-eaved-leanto-shelter",
	});
}

export default Component;
