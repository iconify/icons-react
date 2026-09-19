import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chavfkb0d.css';
import '../../css/b/bxegycsht.css';
import '../../css/p/pbo4fkb3v.css';
import '../../css/q/qhsic4b0m.css';
import '../../css/w/wq4p0r7-p.css';
import '../../css/h/huigcwf6g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="chavfkb0d"/><path class="bxegycsht"/><path class="pbo4fkb3v"/><rect class="qhsic4b0m"/><circle class="wq4p0r7-p"/><circle class="huigcwf6g"/></g>`,
		"fallback": "icon-park:game-console",
	});
}

export default Component;
