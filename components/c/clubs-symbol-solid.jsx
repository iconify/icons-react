import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocku_jbwp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ocku_jbwp"/>`,
		"fallback": "streamline:clubs-symbol-solid",
	});
}

export default Component;
