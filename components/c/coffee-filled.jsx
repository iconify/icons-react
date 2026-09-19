import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqq2j3bkt.css';
import '../../css/e/esv5bmbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqq2j3bkt"/><path class="esv5bmbuy"/>`,
		"fallback": "boxicons:coffee-filled",
	});
}

export default Component;
