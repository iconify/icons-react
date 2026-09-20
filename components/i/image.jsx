import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnvj0fsqr.css';
import '../../css/k/kqkvu1bgm.css';
import '../../css/c/c4zydxb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnvj0fsqr"/><path class="kqkvu1bgm"/><path class="c4zydxb4g"/>`,
		"fallback": "stash:image",
	});
}

export default Component;
