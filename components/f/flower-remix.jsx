import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isp5cgbec.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="isp5cgbec"/>`,
		"fallback": "streamline:flower-remix",
	});
}

export default Component;
