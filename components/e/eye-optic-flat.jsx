import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s678-kb5e.css';
import '../../css/i/iuxeg3bhp.css';
import '../../css/m/moi355b5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s678-kb5e"/><path class="iuxeg3bhp"/><path class="moi355b5x"/></g>`,
		"fallback": "streamline-plump-color:eye-optic-flat",
	});
}

export default Component;
