import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hhl_8y8lj.css';
import '../../css/i/i9gtl7m_b.css';
import '../../css/g/g5dgrab9a.css';
import '../../css/n/ndwg9bb9v.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/d/dl4me3bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hhl_8y8lj wm-shadow"/><path class="i9gtl7m_b"/><path class="g5dgrab9a"/><path class="ndwg9bb9v"/><path class="bs1xk8baz"/><path class="dl4me3bdf"/></g>`,
		"fallback": "withicons-retro:avatar-man-bald",
	});
}

export default Component;
