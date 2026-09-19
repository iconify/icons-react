import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4aexd1cu.css';
import '../../css/k/kpl5dzvml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4aexd1cu"/><path class="kpl5dzvml"/>`,
		"fallback": "bx:bxs-cat",
	});
}

export default Component;
