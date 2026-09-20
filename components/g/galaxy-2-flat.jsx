import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxgnrkbfo.css';
import '../../css/d/dluzdob9i.css';
import '../../css/s/s3e1eac6e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxgnrkbfo"/><path class="dluzdob9i"/><path class="s3e1eac6e"/></g>`,
		"fallback": "streamline-plump-color:galaxy-2-flat",
	});
}

export default Component;
