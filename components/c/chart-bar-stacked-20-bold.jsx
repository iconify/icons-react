import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0osbpbjq.css';
import '../../css/r/reicurj-z.css';
import '../../css/a/aba8_skjp.css';
import '../../css/e/e-mc0obtp.css';
import '../../css/b/bjegt8byl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0osbpbjq"/><path class="reicurj-z"/><path class="aba8_skjp"/><path class="e-mc0obtp"/><path class="bjegt8byl"/>`,
		"fallback": "energy-icons:chart-bar-stacked-20-bold",
	});
}

export default Component;
