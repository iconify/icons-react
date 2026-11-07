import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay6nt709p.css';
import '../../css/g/g-7dejhie.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w9-67fbcg.css';
import '../../css/n/nariwduko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay6nt709p"/><path clip-rule="evenodd" class="g-7dejhie"/><g class="xtpeb-edw"><path class="w9-67fbcg"/><path class="nariwduko"/></g>`,
		"fallback": "solar:album-bold-duotone",
	});
}

export default Component;
