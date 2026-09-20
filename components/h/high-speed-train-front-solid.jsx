import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elj75ibfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="elj75ibfn"/>`,
		"fallback": "streamline-flex:high-speed-train-front-solid",
	});
}

export default Component;
