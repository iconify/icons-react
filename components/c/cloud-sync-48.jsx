import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szla-yy9o.css';
import '../../css/g/g59d8ymwp.css';
import '../../css/v/vghnpubvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szla-yy9o"/><path class="g59d8ymwp"/><path class="vghnpubvv"/>`,
		"fallback": "energy-icons:cloud-sync-48",
	});
}

export default Component;
