import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2pt2mban.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2pt2mban"/>`,
		"fallback": "teenyicons:double-caret-left-small-solid",
	});
}

export default Component;
