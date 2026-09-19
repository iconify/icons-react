import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/wp78-jzxc.css';
import '../../css/e/eb6et-bht.css';
import '../../css/t/t4gy73cxx.css';
import '../../css/p/pw33lubvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="wp78-jzxc"/><circle class="eb6et-bht"/><path class="t4gy73cxx"/><path class="pw33lubvz"/></g>`,
		"fallback": "icon-park:file-search-one",
	});
}

export default Component;
