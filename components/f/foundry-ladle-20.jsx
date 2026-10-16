import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3j2ttbri.css';
import '../../css/w/w0ahlnbjy.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3j2ttbri"/><path class="w0ahlnbjy"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:foundry-ladle-20",
	});
}

export default Component;
