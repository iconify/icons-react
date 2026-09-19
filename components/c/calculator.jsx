import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/chlufk9hn.css';
import '../../css/z/zqxiydbcq.css';
import '../../css/u/u3mutbcwy.css';
import '../../css/e/etehlz6wq.css';
import '../../css/f/fds2zou2y.css';
import '../../css/q/qd1so1ilw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="chlufk9hn"/><path class="zqxiydbcq"/><path class="u3mutbcwy"/><path class="etehlz6wq"/><path class="fds2zou2y"/><path class="qd1so1ilw"/></g>`,
		"fallback": "icon-park:calculator",
	});
}

export default Component;
