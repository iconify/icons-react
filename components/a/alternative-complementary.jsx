import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4u4mbc3g.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4u4mbc3g"/>`,
		"fallback": "medical-icon:alternative-complementary",
	});
}

export default Component;
