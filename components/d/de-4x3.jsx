import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4l6eub2n.css';
import '../../css/c/c8caqzgai.css';
import '../../css/u/ug-lui25o.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4l6eub2n"/><path class="c8caqzgai"/><path class="ug-lui25o"/>`,
		"fallback": "flag:de-4x3",
	});
}

export default Component;
