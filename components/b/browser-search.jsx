import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8dnbvlph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8dnbvlph"/>`,
		"fallback": "nimbus:browser-search",
	});
}

export default Component;
