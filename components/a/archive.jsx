import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv7p1jn3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv7p1jn3p"/>`,
		"fallback": "grommet-icons:archive",
	});
}

export default Component;
