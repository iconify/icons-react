import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-buwcwgg.css';
import '../../css/n/nt38765ti.css';
import '../../css/n/nmtl4hd5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-buwcwgg"/><path class="nt38765ti"/><path class="nmtl4hd5s"/></g>`,
		"fallback": "andrsrxn:folder-music",
	});
}

export default Component;
