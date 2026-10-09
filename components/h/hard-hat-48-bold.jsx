import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w010_tghd.css';
import '../../css/j/jjy_43hmu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w010_tghd"/><path class="jjy_43hmu"/>`,
		"fallback": "energy-icons:hard-hat-48-bold",
	});
}

export default Component;
