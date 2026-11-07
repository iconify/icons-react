import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubrgnsref.css';
import '../../css/x/xl-jarb6g.css';
import '../../css/p/p8b3qu2bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubrgnsref"/><path class="xl-jarb6g"/><path class="p8b3qu2bi"/>`,
		"fallback": "solar:bomb-bold",
	});
}

export default Component;
