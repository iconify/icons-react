import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zle0wgbup.css';
import '../../css/u/uxo-7bbsr.css';
import '../../css/v/vz0osi9vl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zle0wgbup"/><path class="uxo-7bbsr"/><path class="vz0osi9vl"/>`,
		"fallback": "energy-icons:carbon-offset-20-bold",
	});
}

export default Component;
