import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi6i5jb0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mi6i5jb0o"/>`,
		"fallback": "healthicons:baby-male-0306m2x-outline",
	});
}

export default Component;
