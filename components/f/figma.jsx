import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/p/plz506b5k.css';
import '../../css/l/ll0239alm.css';
import '../../css/q/qip9biq6h.css';
import '../../css/k/k-61y8b5k.css';
import '../../css/c/chjxmlbto.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="plz506b5k"/><path class="ll0239alm"/><path class="qip9biq6h"/><path class="k-61y8b5k"/><path class="chjxmlbto"/></g>`,
		"fallback": "icon-park:figma",
	});
}

export default Component;
