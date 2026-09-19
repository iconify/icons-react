import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7b5tjbqa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t7b5tjbqa"/>`,
		"fallback": "healthicons:cpap-tubes",
	});
}

export default Component;
