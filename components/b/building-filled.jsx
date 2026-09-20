import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci8y9zdxq.css';
import '../../css/p/p2cix6gor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci8y9zdxq"/><path class="p2cix6gor"/>`,
		"fallback": "tdesign:building-filled",
	});
}

export default Component;
