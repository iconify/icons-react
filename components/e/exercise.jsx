import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1aovy3pz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1aovy3pz"/>`,
		"fallback": "healthicons:exercise",
	});
}

export default Component;
