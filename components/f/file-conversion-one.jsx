import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/x/xl876boej.css';
import '../../css/o/ogngkrbxk.css';
import '../../css/s/smxvi3bpq.css';
import '../../css/z/zz6tqgbve.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="xl876boej"/><path class="ogngkrbxk"/><path class="smxvi3bpq"/><path class="zz6tqgbve"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-conversion-one",
	});
}

export default Component;
