import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njz8i7bri.css';
import '../../css/i/i5ok5vt-f.css';
import '../../css/n/n4l0dpjwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njz8i7bri"/><path class="i5ok5vt-f"/><path class="n4l0dpjwy"/>`,
		"fallback": "energy-icons:emissions-down-48-bold",
	});
}

export default Component;
