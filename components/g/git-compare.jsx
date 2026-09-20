import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x28n-bb9e.css';
import '../../css/b/ba-uen-7c.css';
import '../../css/x/x8blwzbiy.css';
import '../../css/e/epmokt3_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x28n-bb9e"/><path class="ba-uen-7c"/><path class="x8blwzbiy"/><path class="epmokt3_y"/></g>`,
		"fallback": "tabler:git-compare",
	});
}

export default Component;
