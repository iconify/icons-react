import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dv-8sac5l.css';
import '../../css/t/t87imdbvf.css';
import '../../css/v/vj-in0b-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dv-8sac5l"/><path class="t87imdbvf"/><path class="vj-in0b-p"/></g>`,
		"fallback": "catppuccin:folder-forgejo",
	});
}

export default Component;
