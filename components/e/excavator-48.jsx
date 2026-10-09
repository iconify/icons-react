import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbhfztbdk.css';
import '../../css/s/s3cdewurv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbhfztbdk"/><path class="s3cdewurv"/>`,
		"fallback": "energy-icons:excavator-48",
	});
}

export default Component;
