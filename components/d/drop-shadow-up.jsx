import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/u/ulte-guim.css';
import '../../css/k/kwzrzeqtd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhGQmxeQo"><g class="hv130ab-t"><path clip-rule="evenodd" class="ulte-guim"/><path class="kwzrzeqtd"/></g></mask></defs><path mask="url(#SVGhGQmxeQo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drop-shadow-up",
	});
}

export default Component;
