import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odtla-seg.css';
import '../../css/n/ns3hbpbni.css';
import '../../css/p/ppyfuefwr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odtla-seg"/><path class="ns3hbpbni"/><path class="ppyfuefwr"/>`,
		"fallback": "ant-design:experiment-twotone",
	});
}

export default Component;
