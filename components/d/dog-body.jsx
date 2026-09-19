import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh88sjbzq.css';
import '../../css/n/nhpgwyiio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh88sjbzq"/><path class="nhpgwyiio"/>`,
		"fallback": "boxicons:dog-body",
	});
}

export default Component;
