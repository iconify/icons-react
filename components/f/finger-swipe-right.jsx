import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmsn-19xf.css';
import '../../css/b/beajqbc6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmsn-19xf"/><path class="beajqbc6h"/>`,
		"fallback": "boxicons:finger-swipe-right",
	});
}

export default Component;
