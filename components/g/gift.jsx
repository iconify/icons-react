import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/d30aez8nr.css';
import '../../css/x/xij1iob8t.css';
import '../../css/v/vjydmy47l.css';
import '../../css/k/kunkzfb7p.css';
import '../../css/o/oe1d-srie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="d30aez8nr"/><path class="xij1iob8t"/><path class="vjydmy47l"/><rect class="kunkzfb7p"/><path class="oe1d-srie"/></g>`,
		"fallback": "icon-park:gift",
	});
}

export default Component;
