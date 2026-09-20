import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p25m-zfzg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p25m-zfzg"/>`,
		"fallback": "streamline-flex:electric-cord-1-solid",
	});
}

export default Component;
