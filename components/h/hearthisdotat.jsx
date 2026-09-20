import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrei6fbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrei6fbwc"/>`,
		"fallback": "thesvg-color:hearthisdotat",
	});
}

export default Component;
