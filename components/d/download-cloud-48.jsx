import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3ugn4t5k.css';
import '../../css/o/odh7t-j9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3ugn4t5k"/><path class="odh7t-j9j"/>`,
		"fallback": "energy-icons:download-cloud-48",
	});
}

export default Component;
