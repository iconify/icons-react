import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jts0sc04i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jts0sc04i"/>`,
		"fallback": "streamline:bill-4-remix",
	});
}

export default Component;
