import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm_-_fgwp.css';
import '../../css/k/kicqyzbtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm_-_fgwp"/><path class="kicqyzbtl"/>`,
		"fallback": "energy-icons:control-rod-48",
	});
}

export default Component;
