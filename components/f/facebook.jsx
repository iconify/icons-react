import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o97im9hdk.css';

const viewBox = {"width":12,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o97im9hdk"/>`,
		"fallback": "fontisto:facebook",
	});
}

export default Component;
