import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duvzeob2c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duvzeob2c"/>`,
		"fallback": "fa7-solid:arrows-split-up-and-left",
	});
}

export default Component;
