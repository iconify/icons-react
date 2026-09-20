import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a51m0noso.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a51m0noso"/>`,
		"fallback": "pinhead:campsite-with-peso",
	});
}

export default Component;
