import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlr2llxyk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlr2llxyk"/>`,
		"fallback": "marketeq:infinite-2",
	});
}

export default Component;
