import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syr6mpbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syr6mpbyq"/>`,
		"fallback": "reicon:driver-refresh-filled",
	});
}

export default Component;
