import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xud0d_adg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xud0d_adg"/>`,
		"fallback": "bxs:info-circle",
	});
}

export default Component;
