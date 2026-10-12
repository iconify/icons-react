import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/x/xl1kjw86u.css';
import '../../css/m/m9lmvkb5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="xl1kjw86u"/><path class="m9lmvkb5m"/>`,
		"fallback": "energy-icons:file-audio-48-bold",
	});
}

export default Component;
