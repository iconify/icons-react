import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs413g27j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zs413g27j"/>`,
		"fallback": "streamline:cut-solid",
	});
}

export default Component;
