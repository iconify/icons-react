import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rot5gv2bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rot5gv2bf"/>`,
		"fallback": "streamline-sharp:browser-error-remix",
	});
}

export default Component;
