import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4s39lk4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s4s39lk4x"/>`,
		"fallback": "gg:dollar",
	});
}

export default Component;
