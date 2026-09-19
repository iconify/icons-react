import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvnsb8bex.css';
import '../../css/r/rjfhlsb4c.css';
import '../../css/o/o235c4b9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvnsb8bex"/><path class="rjfhlsb4c"/><path class="o235c4b9u"/>`,
		"fallback": "flat-color-icons:android-os",
	});
}

export default Component;
