import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a0w1mqrvs.css';
import '../../css/o/ocg2edccm.css';
import '../../css/x/x4rdw3dgg.css';
import '../../css/g/gp03omb9u.css';
import '../../css/x/xu6ubfb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="a0w1mqrvs"/><path class="ocg2edccm"/><path class="x4rdw3dgg"/><path class="gp03omb9u"/><path class="xu6ubfb5d"/></g>`,
		"fallback": "icon-park:delete-five",
	});
}

export default Component;
