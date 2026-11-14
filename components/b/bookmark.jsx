import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fjfkz6bwl.css';
import '../../css/j/jqd4e_bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fjfkz6bwl"/><path class="jqd4e_bpe"/></g>`,
		"fallback": "struq:bookmark",
	});
}

export default Component;
