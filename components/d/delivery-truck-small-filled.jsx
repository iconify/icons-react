import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da8z4_zfg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da8z4_zfg"/>`,
		"fallback": "dinkie-icons:delivery-truck-small-filled",
	});
}

export default Component;
