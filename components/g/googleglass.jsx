import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnffa9b1u.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnffa9b1u"/>`,
		"fallback": "whh:googleglass",
	});
}

export default Component;
