import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgo4n8spf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgo4n8spf"/>`,
		"fallback": "f7:creditcard",
	});
}

export default Component;
