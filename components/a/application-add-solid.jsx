import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf2pff15t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hf2pff15t"/>`,
		"fallback": "streamline:application-add-solid",
	});
}

export default Component;
