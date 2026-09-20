import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnvj0fsqr.css';
import '../../css/k/kqkvu1bgm.css';
import '../../css/a/a22-aez3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnvj0fsqr"/><path class="kqkvu1bgm"/><path class="a22-aez3p"/>`,
		"fallback": "stash:image-duotone",
	});
}

export default Component;
