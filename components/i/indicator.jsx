import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbrk_2byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbrk_2byt"/>`,
		"fallback": "grommet-icons:indicator",
	});
}

export default Component;
