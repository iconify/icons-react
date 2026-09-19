import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz0obiboj.css';
import '../../css/b/b7-nwhb_u.css';
import '../../css/w/wta8ibc4z.css';
import '../../css/r/rncsri80p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz0obiboj"/><path class="b7-nwhb_u"/><path class="wta8ibc4z"/><path class="rncsri80p"/>`,
		"fallback": "flat-color-icons:biotech",
	});
}

export default Component;
