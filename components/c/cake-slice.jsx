import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/l0s25nbas.css';
import '../../css/y/ym83_p68n.css';
import '../../css/i/i8a4t027f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="l0s25nbas"/><path class="ym83_p68n"/><path class="i8a4t027f"/></g>`,
		"fallback": "streamline-plump:cake-slice",
	});
}

export default Component;
