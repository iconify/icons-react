import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp694xb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp694xb5p"/>`,
		"fallback": "octicon:fiscal-host-24",
	});
}

export default Component;
