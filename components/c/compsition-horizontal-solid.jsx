import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al4_blb0u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="al4_blb0u"/>`,
		"fallback": "streamline-flex:compsition-horizontal-solid",
	});
}

export default Component;
