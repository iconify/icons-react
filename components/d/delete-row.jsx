import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u_mhe7b4u.css';
import '../../css/v/v539r36th.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u_mhe7b4u"/><path class="v539r36th"/></g>`,
		"fallback": "streamline-plump:delete-row",
	});
}

export default Component;
