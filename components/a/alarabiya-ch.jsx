import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwg_5dfby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwg_5dfby"/>`,
		"fallback": "cbi:alarabiya-ch",
	});
}

export default Component;
