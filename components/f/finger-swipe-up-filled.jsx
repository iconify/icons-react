import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv-ekvb3r.css';
import '../../css/y/yze3d2bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv-ekvb3r"/><path class="yze3d2bva"/>`,
		"fallback": "boxicons:finger-swipe-up-filled",
	});
}

export default Component;
