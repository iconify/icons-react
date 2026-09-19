import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr1oq5bin.css';
import '../../css/u/uybrlibii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr1oq5bin"/><path class="uybrlibii"/>`,
		"fallback": "bx:bxs-layer-minus",
	});
}

export default Component;
