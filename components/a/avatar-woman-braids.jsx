import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n6i2dlzoy.css';
import '../../css/i/ijrb1sb6l.css';
import '../../css/k/kgtx4pp6m.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/o/o4aao8btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n6i2dlzoy"/><path class="ijrb1sb6l"/><path class="kgtx4pp6m"/><path class="qk9xa2v5m"/><path class="o4aao8btp"/></g>`,
		"fallback": "withicons-bauhaus:avatar-woman-braids",
	});
}

export default Component;
