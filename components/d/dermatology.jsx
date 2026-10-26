import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk4-6obph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lk4-6obph"/>`,
		"fallback": "healthicons:dermatology",
	});
}

export default Component;
