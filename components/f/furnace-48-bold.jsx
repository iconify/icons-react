import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g44ax6v6c.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/w/w151_7bte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g44ax6v6c"/><path class="ihmii9b0s"/><path class="w151_7bte"/>`,
		"fallback": "energy-icons:furnace-48-bold",
	});
}

export default Component;
