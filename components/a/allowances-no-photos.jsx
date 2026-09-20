import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/spglryb8s.css';
import '../../css/y/yim90nbkf.css';
import '../../css/x/xfdvzbb0y.css';
import '../../css/a/ash50uz4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="spglryb8s"/><path class="yim90nbkf"/><path class="xfdvzbb0y"/><path class="ash50uz4h"/></g>`,
		"fallback": "streamline-ultimate:allowances-no-photos",
	});
}

export default Component;
