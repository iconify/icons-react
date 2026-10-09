import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l361dvbca.css';
import '../../css/h/hud-elbct.css';
import '../../css/a/ahkc9jbbp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l361dvbca"/><path class="hud-elbct"/><path class="ahkc9jbbp"/>`,
		"fallback": "energy-icons:carrot-20-bold",
	});
}

export default Component;
