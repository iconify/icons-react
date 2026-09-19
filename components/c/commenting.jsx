import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh_jiebln.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh_jiebln"/>`,
		"fallback": "fontisto:commenting",
	});
}

export default Component;
