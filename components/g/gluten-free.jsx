import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv2qk8b_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lv2qk8b_f"/>`,
		"fallback": "healthicons:gluten-free",
	});
}

export default Component;
