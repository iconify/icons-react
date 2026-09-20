import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpws0u1gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpws0u1gw"/>`,
		"fallback": "thesvg:headspace",
	});
}

export default Component;
