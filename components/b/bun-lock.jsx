import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rdqrvjbdn.css';
import '../../css/z/z5jau7bwx.css';
import '../../css/f/fr14i5sgw.css';
import '../../css/f/f6jlbbbjk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rdqrvjbdn"/><path class="z5jau7bwx"/><path class="fr14i5sgw"/><path class="f6jlbbbjk"/></g>`,
		"fallback": "catppuccin:bun-lock",
	});
}

export default Component;
