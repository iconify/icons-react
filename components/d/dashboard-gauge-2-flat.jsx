import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kb193-bpz.css';
import '../../css/e/eq7vpodlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kb193-bpz"/><path class="eq7vpodlx"/></g>`,
		"fallback": "streamline-sharp-color:dashboard-gauge-2-flat",
	});
}

export default Component;
