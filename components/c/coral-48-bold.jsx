import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngvvfgbiq.css';
import '../../css/x/xzl9ytdci.css';
import '../../css/e/e3s9tcb5r.css';
import '../../css/o/oi4pmdc2i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngvvfgbiq"/><path class="xzl9ytdci"/><path class="e3s9tcb5r"/><path class="oi4pmdc2i"/>`,
		"fallback": "energy-icons:coral-48-bold",
	});
}

export default Component;
