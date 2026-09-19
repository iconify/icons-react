import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj8jzub4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj8jzub4p"/>`,
		"fallback": "grommet-icons:console",
	});
}

export default Component;
