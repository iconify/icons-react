import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7lngpy8k.css';
import '../../css/o/oid3f0gyj.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7lngpy8k"/><path class="oid3f0gyj"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:cement-plant-48-bold",
	});
}

export default Component;
