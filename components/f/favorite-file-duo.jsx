import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8a6n4b0g.css';
import '../../css/x/x8wf9n8-m.css';
import '../../css/e/emd0nzi7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8a6n4b0g"/><path class="x8wf9n8-m"/><path class="emd0nzi7e"/></g>`,
		"fallback": "streamline-kameleon-color:favorite-file-duo",
	});
}

export default Component;
