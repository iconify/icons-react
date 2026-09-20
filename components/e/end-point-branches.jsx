import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/le0gmvb7l.css';
import '../../css/z/za-ab5tpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="le0gmvb7l"/><path class="za-ab5tpq"/></g>`,
		"fallback": "streamline-plump-color:end-point-branches",
	});
}

export default Component;
