import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd2c1ndht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd2c1ndht"/>`,
		"fallback": "mdi:battery-sync-outline",
	});
}

export default Component;
