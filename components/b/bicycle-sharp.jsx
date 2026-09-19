import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duy4fwuoh.css';
import '../../css/y/ym7s1o7nd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duy4fwuoh"/><path class="ym7s1o7nd"/>`,
		"fallback": "famicons:bicycle-sharp",
	});
}

export default Component;
