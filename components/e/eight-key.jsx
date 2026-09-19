import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/b51-lhp3z.css';
import '../../css/h/h1c-vo8ig.css';
import '../../css/g/gst7bffpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="b51-lhp3z"/><path class="h1c-vo8ig"/><path class="gst7bffpp"/></g>`,
		"fallback": "icon-park:eight-key",
	});
}

export default Component;
