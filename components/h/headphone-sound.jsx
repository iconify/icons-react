import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5v6uobzb.css';
import '../../css/e/ewi85glah.css';
import '../../css/f/frzjyvvrk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGERWYaeKe"><g class="ft5dv1b6b"><path class="h5v6uobzb"/><path class="ewi85glah"/><path class="frzjyvvrk"/></g></mask></defs><path mask="url(#SVGERWYaeKe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:headphone-sound",
	});
}

export default Component;
