import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/i_ofu-b1b.css';
import '../../css/p/pt40p0bcy.css';
import '../../css/o/o-ro0rb9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="i_ofu-b1b"/><path class="pt40p0bcy"/><path class="o-ro0rb9o"/></g>`,
		"fallback": "streamline-plump:add-layer-2",
	});
}

export default Component;
