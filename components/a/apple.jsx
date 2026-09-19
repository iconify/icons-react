import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi0k_11hx.css';
import '../../css/i/iv3qwd63l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7N9zCtBw"><g class="ft5dv1b6b"><path class="mi0k_11hx"/><path class="iv3qwd63l"/></g></mask></defs><path mask="url(#SVG7N9zCtBw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:apple",
	});
}

export default Component;
