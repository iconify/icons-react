import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/k/knpp2accw.css';
import '../../css/k/kis5lmh2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="knpp2accw"/><path class="kis5lmh2k"/>`,
		"fallback": "energy-icons:globe-48",
	});
}

export default Component;
