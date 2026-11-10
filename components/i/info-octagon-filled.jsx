import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxls-hb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxls-hb3e"/>`,
		"fallback": "tabler:info-octagon-filled",
	});
}

export default Component;
