import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlv6aib1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jlv6aib1h"/>`,
		"fallback": "streamline-sharp-color:arrow-reload-horizontal-2-flat",
	});
}

export default Component;
