import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bunr4sp8t.css';
import '../../css/p/pzf03jb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bunr4sp8t"/><path class="pzf03jb9y"/></g>`,
		"fallback": "tabler:brand-css3",
	});
}

export default Component;
