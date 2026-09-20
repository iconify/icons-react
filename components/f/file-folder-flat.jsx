import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csy_hqbzy.css';
import '../../css/i/id-twr99f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="csy_hqbzy"/><path class="id-twr99f"/></g>`,
		"fallback": "streamline-plump-color:file-folder-flat",
	});
}

export default Component;
