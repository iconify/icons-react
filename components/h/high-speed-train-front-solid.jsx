import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv5n45bpp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fv5n45bpp"/>`,
		"fallback": "streamline:high-speed-train-front-solid",
	});
}

export default Component;
