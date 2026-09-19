import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjajftbvq.css';
import '../../css/m/md286fbip.css';
import '../../css/z/zlv8pebwp.css';
import '../../css/p/p8hwf5bcv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yjajftbvq"/><g class="md286fbip"><path class="zlv8pebwp"/><path class="p8hwf5bcv"/></g></g>`,
		"fallback": "cryptocurrency-color:flux",
	});
}

export default Component;
