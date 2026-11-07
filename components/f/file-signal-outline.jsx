import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp4tifbel.css';
import '../../css/b/bdbim4bgo.css';
import '../../css/t/tl0l83b8e.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp4tifbel"/><path class="bdbim4bgo"/><path clip-rule="evenodd" class="tl0l83b8e"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-signal-outline",
	});
}

export default Component;
