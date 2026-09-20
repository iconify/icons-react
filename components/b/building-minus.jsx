import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znx86gb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znx86gb9a"/>`,
		"fallback": "tabler:building-minus",
	});
}

export default Component;
