import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay8_terzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay8_terzm"/>`,
		"fallback": "mdi:emoticon-pig",
	});
}

export default Component;
