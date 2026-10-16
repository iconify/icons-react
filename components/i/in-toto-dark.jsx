import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0d7-ntjn.css';

const viewBox = {"width":366.08,"height":298.83,"left":-3.29,"top":29.96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0d7-ntjn"/>`,
		"fallback": "thesvg-color:in-toto-dark",
	});
}

export default Component;
