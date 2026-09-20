import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6i512l0s.css';
import '../../css/f/fkggerb-j.css';
import '../../css/v/vh2yfac-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6i512l0s"/><path class="fkggerb-j"/><path class="vh2yfac-r"/></g>`,
		"fallback": "streamline-flex-color:insert-center-left-1",
	});
}

export default Component;
