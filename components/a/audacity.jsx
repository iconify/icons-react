import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgvxnbcqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgvxnbcqi"/>`,
		"fallback": "simple-icons:audacity",
	});
}

export default Component;
