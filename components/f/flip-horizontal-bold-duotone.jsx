import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pb9gzdd5r.css';
import '../../css/f/f8c-vr1fw.css';
import '../../css/b/bi-4r3b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="pb9gzdd5r"/><path class="f8c-vr1fw"/></g><path clip-rule="evenodd" class="bi-4r3b3z"/>`,
		"fallback": "solar:flip-horizontal-bold-duotone",
	});
}

export default Component;
