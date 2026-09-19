import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/e/ec9lvsxkj.css';
import '../../css/z/zwf0cly4t.css';
import '../../css/j/jgdiew26a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="p-3d8dotc"/><path class="ec9lvsxkj"/><path clip-rule="evenodd" class="zwf0cly4t"/><path class="jgdiew26a"/></g>`,
		"fallback": "icon-park-outline:adobe-photoshop",
	});
}

export default Component;
