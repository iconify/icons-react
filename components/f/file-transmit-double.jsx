import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvcfj9tnp.css';
import '../../css/m/md2nh-bhe.css';
import '../../css/t/t87a3gbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvcfj9tnp"/><path class="md2nh-bhe"/><path class="t87a3gbnd"/></g>`,
		"fallback": "tdesign:file-transmit-double",
	});
}

export default Component;
