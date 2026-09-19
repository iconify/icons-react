import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ac8ev1bcp.css';
import '../../css/r/rb_5at3_n.css';
import '../../css/x/xbxo-kbjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ac8ev1bcp"/><path class="rb_5at3_n"/><path class="xbxo-kbjf"/></g>`,
		"fallback": "icon-park:average",
	});
}

export default Component;
