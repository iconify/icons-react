import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beajqbc6h.css';
import '../../css/g/gfumbbcog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beajqbc6h"/><path class="gfumbbcog"/>`,
		"fallback": "boxicons:finger-swipe-right-filled",
	});
}

export default Component;
