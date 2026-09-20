import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/anbdll-bb.css';
import '../../css/u/u5v4_zbzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="anbdll-bb"/><path class="u5v4_zbzv"/></g>`,
		"fallback": "streamline-plump:film-slate",
	});
}

export default Component;
