import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv-o7vb2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lv-o7vb2b"/>`,
		"fallback": "streamline:cloud-add-solid",
	});
}

export default Component;
