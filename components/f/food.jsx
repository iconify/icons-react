import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zceg7w4_o.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zceg7w4_o"/>`,
		"fallback": "map:food",
	});
}

export default Component;
