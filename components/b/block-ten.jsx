import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/d/d70u10bbk.css';
import '../../css/d/dov8vg2gk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="d70u10bbk"/><path class="dov8vg2gk"/></g>`,
		"fallback": "icon-park-solid:block-ten",
	});
}

export default Component;
