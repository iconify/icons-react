import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enpcx5b5x.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enpcx5b5x"/>`,
		"fallback": "whh:creditcard",
	});
}

export default Component;
