import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dg0f2xctt.css';
import '../../css/g/g6fxmdb0b.css';
import '../../css/v/v1-jqq6jk.css';
import '../../css/e/e62u-yb0o.css';
import '../../css/p/p3jkzib6d.css';
import '../../css/o/ovm2mub6e.css';
import '../../css/c/cae6szb3l.css';
import '../../css/s/szrkkkb6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dg0f2xctt"/><path class="g6fxmdb0b"/><path class="v1-jqq6jk"/><path class="e62u-yb0o"/><path class="p3jkzib6d"/><path class="ovm2mub6e"/><path class="cae6szb3l"/><path class="szrkkkb6h"/></g>`,
		"fallback": "icon-park-solid:four-round-point-connection",
	});
}

export default Component;
