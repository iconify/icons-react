import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rns7-ac9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rns7-ac9p"/>`,
		"fallback": "streamline:cyborg-2-solid",
	});
}

export default Component;
