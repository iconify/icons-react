import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhhghx8wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhhghx8wo"/>`,
		"fallback": "uil:exclamation-octagon",
	});
}

export default Component;
