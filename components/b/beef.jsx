import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfwl-6rai.css';
import '../../css/p/p-xswwuam.css';
import '../../css/v/vzm4z_6wm.css';
import '../../css/t/tkrh4u31z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfwl-6rai"/><path class="p-xswwuam"/><path class="vzm4z_6wm"/><path class="tkrh4u31z"/>`,
		"fallback": "iconito:beef",
	});
}

export default Component;
