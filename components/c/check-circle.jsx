import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8eq4u5hf.css';
import '../../css/m/mabwzbbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8eq4u5hf"/><path class="mabwzbbvc"/>`,
		"fallback": "nimbus:check-circle",
	});
}

export default Component;
