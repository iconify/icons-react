import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xkc428b-w.css';
import '../../css/b/b33ifqbsd.css';
import '../../css/g/gtgxb9p8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xkc428b-w"/><path class="b33ifqbsd"/><path class="gtgxb9p8u"/></g>`,
		"fallback": "icon-park-outline:chili",
	});
}

export default Component;
