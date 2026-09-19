import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1ssm0bbx.css';
import '../../css/g/gga26nl5f.css';
import '../../css/j/jh8nxyb3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d1ssm0bbx"/><path class="gga26nl5f"/><path class="jh8nxyb3z"/></g>`,
		"fallback": "icon-park-solid:helmet",
	});
}

export default Component;
