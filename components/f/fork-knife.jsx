import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzpj5yn7p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzpj5yn7p"/>`,
		"fallback": "streamline-flex:fork-knife",
	});
}

export default Component;
