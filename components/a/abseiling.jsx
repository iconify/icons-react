import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc03ji2lv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc03ji2lv"/>`,
		"fallback": "temaki:abseiling",
	});
}

export default Component;
