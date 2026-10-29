import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rzg7m5suh.css';
import '../../css/x/x_0h1kjap.css';
import '../../css/u/u-julac8y.css';
import '../../css/h/hf0bzw-qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rzg7m5suh wm-k"/><path class="wm-shadow x_0h1kjap"/><path class="u-julac8y wm-k"/><path class="hf0bzw-qm wm-a"/></g>`,
		"fallback": "withicons:baby-bottle-engrave",
	});
}

export default Component;
