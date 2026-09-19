import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yq0mgfg9t.css';
import '../../css/f/frhx92bgo.css';
import '../../css/q/q3vjumbms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yq0mgfg9t"/><path class="frhx92bgo"/><path class="q3vjumbms"/></g>`,
		"fallback": "fluent-emoji-flat:ice",
	});
}

export default Component;
