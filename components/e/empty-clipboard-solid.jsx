import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb46kvg1f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sb46kvg1f"/>`,
		"fallback": "streamline-flex:empty-clipboard-solid",
	});
}

export default Component;
