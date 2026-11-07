import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/cjcrzte3y.css';
import '../../css/q/qmdhvtfgy.css';
import '../../css/b/bkb4aob9x.css';
import '../../css/h/h0homb0yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="cjcrzte3y"/><path class="qmdhvtfgy"/></g><path class="bkb4aob9x"/><path class="h0homb0yl"/>`,
		"fallback": "solar:chevrons-right-left-bold-duotone",
	});
}

export default Component;
