import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlukkybbv.css';
import '../../css/v/v11awfbyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlukkybbv"/><path class="v11awfbyn"/>`,
		"fallback": "energy-icons:bug-48-bold",
	});
}

export default Component;
