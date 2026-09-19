import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu6inrb8q.css';
import '../../css/o/o4p12ib8x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu6inrb8q"/><path class="o4p12ib8x"/>`,
		"fallback": "carbon:charging-station-filled",
	});
}

export default Component;
