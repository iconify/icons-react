import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2xdvtgbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a2xdvtgbv"/>`,
		"fallback": "qlementine-icons:discord-24",
	});
}

export default Component;
