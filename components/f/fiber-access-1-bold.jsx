import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzq3d_byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rzq3d_byk"/>`,
		"fallback": "streamline-ultimate:fiber-access-1-bold",
	});
}

export default Component;
