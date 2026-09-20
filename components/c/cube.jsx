import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx64ur8pu.css';
import '../../css/d/da2w1iter.css';
import '../../css/v/vvr7kxj9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx64ur8pu"/><path class="da2w1iter"/><path class="vvr7kxj9u"/>`,
		"fallback": "uim:cube",
	});
}

export default Component;
