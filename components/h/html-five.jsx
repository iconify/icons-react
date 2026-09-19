import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z_m2-cb_v.css';
import '../../css/e/eelehmb1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="z_m2-cb_v"/><path class="eelehmb1s"/></g>`,
		"fallback": "icon-park:html-five",
	});
}

export default Component;
