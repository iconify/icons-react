import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shs3c61cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shs3c61cs"/>`,
		"fallback": "mdi:emoticon-sheep",
	});
}

export default Component;
