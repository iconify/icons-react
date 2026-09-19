import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r79emxjpq.css';
import '../../css/v/v9tsbnbgv.css';
import '../../css/i/i27y6db2l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r79emxjpq"/><path class="v9tsbnbgv"/><path class="i27y6db2l"/></g>`,
		"fallback": "icon-park:helmet",
	});
}

export default Component;
