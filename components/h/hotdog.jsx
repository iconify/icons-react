import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-vm5ubxp.css';
import '../../css/w/w54lu2b9d.css';
import '../../css/h/h432u9bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-vm5ubxp"/><path class="w54lu2b9d"/><path class="h432u9bts"/>`,
		"fallback": "circum:hotdog",
	});
}

export default Component;
