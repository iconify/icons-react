import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rxwhx8i8w.css';
import '../../css/e/e9_m8lzcu.css';
import '../../css/r/r9pdiobtk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rxwhx8i8w"/><path class="e9_m8lzcu"/><path class="r9pdiobtk"/></g>`,
		"fallback": "marketeq:caution-sign-square",
	});
}

export default Component;
