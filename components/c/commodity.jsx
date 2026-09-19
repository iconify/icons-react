import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fe8ov1blm.css';
import '../../css/n/ny-0gfb3p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8xZFKcWH"><g class="ufeehvblu"><path class="fe8ov1blm"/><path class="ny-0gfb3p"/></g></mask></defs><path mask="url(#SVG8xZFKcWH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:commodity",
	});
}

export default Component;
