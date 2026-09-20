import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/u/u16vewz6q.css';
import '../../css/w/wrpemn4do.css';
import '../../css/a/akgub1brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="u16vewz6q"/><path class="wrpemn4do"/><path class="akgub1brv"/></g>`,
		"fallback": "streamline-ultimate:acupuncture-back",
	});
}

export default Component;
