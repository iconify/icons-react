import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dct3tmbja.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dct3tmbja"/>`,
		"fallback": "streamline-flex-color:anchor-flat",
	});
}

export default Component;
