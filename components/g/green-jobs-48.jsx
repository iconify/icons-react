import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypuxbw7af.css';
import '../../css/a/awuv256_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypuxbw7af"/><path class="awuv256_t"/>`,
		"fallback": "energy-icons:green-jobs-48",
	});
}

export default Component;
