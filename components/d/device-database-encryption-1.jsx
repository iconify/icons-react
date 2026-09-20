import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n0s9jvo3d.css';
import '../../css/h/h7y8_cc6w.css';
import '../../css/a/a4ytcjd1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="n0s9jvo3d"/><path class="h7y8_cc6w"/><path class="a4ytcjd1h"/></g>`,
		"fallback": "streamline-plump-color:device-database-encryption-1",
	});
}

export default Component;
