import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/j/j3353fbdb.css';
import '../../css/w/wmcqp3blw.css';
import '../../css/s/sfcatcbwd.css';
import '../../css/w/w3y2wob5f.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="j3353fbdb"/><path class="wmcqp3blw"/><path class="sfcatcbwd"/><path class="w3y2wob5f"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-hash-one",
	});
}

export default Component;
