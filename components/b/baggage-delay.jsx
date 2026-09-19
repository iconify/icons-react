import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lbj9g9z9s.css';
import '../../css/r/reeb0u-cw.css';
import '../../css/l/lzo23eb0u.css';
import '../../css/v/v4ugeic-t.css';
import '../../css/s/s6atrbcnl.css';
import '../../css/x/x2jzcbboy.css';
import '../../css/r/r7580zuup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="lbj9g9z9s"/><path class="reeb0u-cw"/><path class="lzo23eb0u"/><path class="v4ugeic-t"/><path class="s6atrbcnl"/><path class="x2jzcbboy"/><path class="r7580zuup"/></g>`,
		"fallback": "icon-park:baggage-delay",
	});
}

export default Component;
