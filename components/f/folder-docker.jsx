import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hfb1keruk.css';
import '../../css/t/tzzto2buw.css';
import '../../css/i/ihhooltlj.css';
import '../../css/h/hjdgj7wdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hfb1keruk"/><g class="tzzto2buw"><path class="ihhooltlj"/><path class="hjdgj7wdz"/></g></g>`,
		"fallback": "catppuccin:folder-docker",
	});
}

export default Component;
