import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1xalrahn.css';
import '../../css/r/rb010diqx.css';
import '../../css/i/ijqqz3eok.css';
import '../../css/l/lo883k-9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1xalrahn"/><path class="rb010diqx"/><path class="ijqqz3eok"/><path class="lo883k-9c"/>`,
		"fallback": "energy-icons:concentrated-solar-48-bold",
	});
}

export default Component;
