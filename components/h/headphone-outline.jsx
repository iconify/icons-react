import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd1xwpbcc.css';
import '../../css/k/kcckbrb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sd1xwpbcc"/><path clip-rule="evenodd" class="kcckbrb0y"/>`,
		"fallback": "cuida:headphone-outline",
	});
}

export default Component;
