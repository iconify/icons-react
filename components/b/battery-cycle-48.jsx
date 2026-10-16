import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_ts022v.css';
import '../../css/c/cj1nlzlda.css';
import '../../css/t/tjxajkbik.css';
import '../../css/j/j-iq2zbqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of_ts022v"/><path class="cj1nlzlda"/><path class="tjxajkbik"/><path class="j-iq2zbqg"/>`,
		"fallback": "energy-icons:battery-cycle-48",
	});
}

export default Component;
