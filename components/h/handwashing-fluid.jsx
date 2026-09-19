import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fb4hq5b3x.css';
import '../../css/f/fg7vcwh7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fb4hq5b3x"/><path class="fg7vcwh7z"/></g>`,
		"fallback": "icon-park-solid:handwashing-fluid",
	});
}

export default Component;
