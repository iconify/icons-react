import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzy__5huq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzy__5huq"/>`,
		"fallback": "token:htm",
	});
}

export default Component;
