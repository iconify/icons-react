import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd_ya3bpo.css';
import '../../css/t/tb0hdetnn.css';
import '../../css/b/b21nc0b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zd_ya3bpo"/><path class="tb0hdetnn"/><path class="b21nc0b7q"/></g>`,
		"fallback": "streamline-cyber-color:hierarchy-business-2",
	});
}

export default Component;
