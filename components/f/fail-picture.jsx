import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vr3z2jdqf.css';
import '../../css/p/pun4r7bvl.css';
import '../../css/m/msyo6pbdb.css';
import '../../css/i/i-w4cbywx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="vr3z2jdqf"/><path class="pun4r7bvl"/><path class="msyo6pbdb"/><path class="i-w4cbywx"/></g>`,
		"fallback": "icon-park:fail-picture",
	});
}

export default Component;
