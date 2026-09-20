import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljfzoqbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ljfzoqbhu"/>`,
		"fallback": "qlementine-icons:amp-24",
	});
}

export default Component;
