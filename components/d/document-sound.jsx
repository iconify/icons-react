import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr4hulbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr4hulbel"/>`,
		"fallback": "grommet-icons:document-sound",
	});
}

export default Component;
