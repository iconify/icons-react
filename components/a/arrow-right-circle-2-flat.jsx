import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1noy7o0r.css';
import '../../css/s/sqi30mely.css';
import '../../css/x/x-1zzjbkf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k1noy7o0r"/><path clip-rule="evenodd" class="sqi30mely"/><path class="x-1zzjbkf"/></g>`,
		"fallback": "streamline-plump-color:arrow-right-circle-2-flat",
	});
}

export default Component;
