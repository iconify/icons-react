import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wffgbluit.css';
import '../../css/g/gl49t146u.css';
import '../../css/s/s5hl0o4ib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wffgbluit"/><path class="gl49t146u"/><path class="s5hl0o4ib"/>`,
		"fallback": "energy-icons:brick-wall-48-bold",
	});
}

export default Component;
