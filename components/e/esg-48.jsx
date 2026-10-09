import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsrljbwz.css';
import '../../css/t/t2_6nubta.css';
import '../../css/t/t92t96xsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsrljbwz"/><path class="t2_6nubta"/><path class="t92t96xsx"/>`,
		"fallback": "energy-icons:esg-48",
	});
}

export default Component;
