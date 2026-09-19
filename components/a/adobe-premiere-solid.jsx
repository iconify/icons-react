import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u06tkfbua.css';
import '../../css/k/ktvtx3m1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u06tkfbua"/><path clip-rule="evenodd" class="ktvtx3m1p"/>`,
		"fallback": "basil:adobe-premiere-solid",
	});
}

export default Component;
