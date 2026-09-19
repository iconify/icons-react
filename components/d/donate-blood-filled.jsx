import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urr2ffbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urr2ffbyc"/>`,
		"fallback": "boxicons:donate-blood-filled",
	});
}

export default Component;
