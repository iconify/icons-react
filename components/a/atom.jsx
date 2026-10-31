import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfgbmlb5h.css';
import '../../css/r/r86t6xbpa.css';
import '../../css/d/dx7k_3bea.css';
import '../../css/e/e1c562ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mfgbmlb5h"/><path class="r86t6xbpa wm-k"/><path class="dx7k_3bea wm-a"/><path class="e1c562ban wm-deco"/></g>`,
		"fallback": "withicons-kawaii:atom",
	});
}

export default Component;
