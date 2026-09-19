import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zma5sabei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zma5sabei"/>`,
		"fallback": "cbi:ceiling-fugato-three-alt",
	});
}

export default Component;
