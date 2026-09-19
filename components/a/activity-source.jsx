import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/o/ou7brervx.css';
import '../../css/b/b5i64r8ek.css';
import '../../css/q/qrsy89s9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="ou7brervx"/><path class="b5i64r8ek"/><path class="qrsy89s9w"/></g>`,
		"fallback": "icon-park:activity-source",
	});
}

export default Component;
