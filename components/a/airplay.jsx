import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv0b3shvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv0b3shvv"/>`,
		"fallback": "vadivam:airplay",
	});
}

export default Component;
