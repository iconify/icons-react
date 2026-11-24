import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afb1-qlef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afb1-qlef"/>`,
		"fallback": "tabler:bed-pin",
	});
}

export default Component;
