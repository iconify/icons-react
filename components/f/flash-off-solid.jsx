import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxxpfe0-y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxxpfe0-y"/>`,
		"fallback": "streamline:flash-off-solid",
	});
}

export default Component;
