import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/m/mayk6bclt.css';
import '../../css/g/g5aipabgd.css';
import '../../css/f/f1kd_obxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="mayk6bclt"/><path class="g5aipabgd"/><path class="f1kd_obxa"/>`,
		"fallback": "energy-icons:barometer-48",
	});
}

export default Component;
