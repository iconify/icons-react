import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3l6bnbdo.css';
import '../../css/l/ltww1dbla.css';
import '../../css/k/k2lu90bwr.css';
import '../../css/p/p0-xtibiq.css';
import '../../css/b/brsq9fqgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u3l6bnbdo"/><rect class="ltww1dbla"/><rect class="k2lu90bwr"/><path class="p0-xtibiq"/><path class="brsq9fqgy"/></g>`,
		"fallback": "icon-park:charging-treasure",
	});
}

export default Component;
