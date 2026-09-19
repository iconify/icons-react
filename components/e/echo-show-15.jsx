import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlg_s-bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlg_s-bfl"/>`,
		"fallback": "cbi:echo-show-15",
	});
}

export default Component;
