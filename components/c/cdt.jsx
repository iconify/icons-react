import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veuw6sb6b.css';
import '../../css/e/ekcp3cc9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veuw6sb6b"/><path class="ekcp3cc9x"/>`,
		"fallback": "token:cdt",
	});
}

export default Component;
