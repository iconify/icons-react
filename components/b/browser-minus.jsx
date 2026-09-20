import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oomu49twr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oomu49twr"/>`,
		"fallback": "tabler:browser-minus",
	});
}

export default Component;
