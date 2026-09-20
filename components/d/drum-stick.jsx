import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mjmqxhm0l.css';
import '../../css/q/q9kqmfbac.css';
import '../../css/y/ywgkucriq.css';
import '../../css/l/ltcy76bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mjmqxhm0l"/><path class="q9kqmfbac"/><path class="ywgkucriq"/><path class="ltcy76bjp"/></g>`,
		"fallback": "streamline-plump-color:drum-stick",
	});
}

export default Component;
