import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf6jtbb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf6jtbb7l"/>`,
		"fallback": "grommet-icons:freebsd",
	});
}

export default Component;
