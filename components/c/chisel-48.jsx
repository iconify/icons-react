import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-3_n6vyt.css';
import '../../css/x/x2br98bbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-3_n6vyt"/><path class="x2br98bbe"/>`,
		"fallback": "energy-icons:chisel-48",
	});
}

export default Component;
