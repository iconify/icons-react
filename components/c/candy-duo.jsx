import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uh51hhbrp.css';
import '../../css/g/g489vwhdf.css';
import '../../css/o/ocoockb2g.css';
import '../../css/a/ax14dsbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uh51hhbrp"/><path class="g489vwhdf"/><path class="ocoockb2g"/><path class="ax14dsbgb"/></g>`,
		"fallback": "withicons:candy-duo",
	});
}

export default Component;
