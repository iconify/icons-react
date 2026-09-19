import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/atnkskbuc.css';
import '../../css/r/ra0h9-09a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="atnkskbuc"/><path class="ra0h9-09a"/></g>`,
		"fallback": "catppuccin:envrc",
	});
}

export default Component;
