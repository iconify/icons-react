import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xur2_mbaw.css';
import '../../css/h/hafvp2bmg.css';
import '../../css/e/epa6czb7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="xur2_mbaw"/><path class="hafvp2bmg"/><path class="epa6czb7k"/></g>`,
		"fallback": "catppuccin:cabal",
	});
}

export default Component;
