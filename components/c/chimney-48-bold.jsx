import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdh6q3bfd.css';
import '../../css/w/wxyj37b4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdh6q3bfd"/><path class="wxyj37b4a"/>`,
		"fallback": "energy-icons:chimney-48-bold",
	});
}

export default Component;
