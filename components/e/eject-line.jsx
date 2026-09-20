import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg9xrn2wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg9xrn2wd"/>`,
		"fallback": "ri:eject-line",
	});
}

export default Component;
