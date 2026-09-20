import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx566sbra.css';
import '../../css/e/enkyavbzd.css';
import '../../css/u/ueh0a_bxa.css';
import '../../css/t/tqjs0zb4k.css';
import '../../css/k/ka6kihb3c.css';

const viewBox = {"width":1424.1,"height":1368};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dx566sbra"><path class="enkyavbzd"/><path class="ueh0a_bxa"/><path class="tqjs0zb4k"/><path class="ka6kihb3c"/></g>`,
		"fallback": "material-icon-theme:dinophp",
	});
}

export default Component;
