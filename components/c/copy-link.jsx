import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/w6ss4accp.css';
import '../../css/j/jnn7bgbxn.css';
import '../../css/r/r6lnibbbz.css';
import '../../css/s/s4ru-lp9d.css';
import '../../css/p/p5i3gbb9b.css';
import '../../css/d/d-50liiah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="w6ss4accp"/><rect class="jnn7bgbxn"/><path class="r6lnibbbz"/><path class="s4ru-lp9d"/><path class="p5i3gbb9b"/><path class="d-50liiah"/></g>`,
		"fallback": "icon-park:copy-link",
	});
}

export default Component;
