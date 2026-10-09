import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2ioum2-g.css';
import '../../css/b/bwjcn-b3e.css';
import '../../css/k/k-kjrmbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2ioum2-g"/><path class="bwjcn-b3e"/><path class="k-kjrmbld"/>`,
		"fallback": "energy-icons:database-48-bold",
	});
}

export default Component;
