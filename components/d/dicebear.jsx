import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbx-v0bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbx-v0bcq"/>`,
		"fallback": "thesvg-color:dicebear",
	});
}

export default Component;
