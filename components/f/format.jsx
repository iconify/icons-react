import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/t/trmtdujop.css';
import '../../css/y/y718yy4vc.css';
import '../../css/d/duqim2bva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="trmtdujop"/><path class="y718yy4vc"/><path class="duqim2bva"/></g>`,
		"fallback": "icon-park:format",
	});
}

export default Component;
