import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9xjerbas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9xjerbas"/>`,
		"fallback": "streamline:hang-up-1-remix",
	});
}

export default Component;
