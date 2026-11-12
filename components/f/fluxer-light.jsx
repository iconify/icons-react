import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjeg35jty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjeg35jty"/>`,
		"fallback": "selfhst:fluxer-light",
	});
}

export default Component;
