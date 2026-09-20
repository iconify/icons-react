import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pssi10jzr.css';
import '../../css/g/gnsad6zcg.css';
import '../../css/e/enwgdw7qx.css';
import '../../css/u/urugr0b-r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pssi10jzr"/><path class="gnsad6zcg"/><path class="enwgdw7qx"/><path class="urugr0b-r"/>`,
		"fallback": "material-icon-theme:clojure",
	});
}

export default Component;
