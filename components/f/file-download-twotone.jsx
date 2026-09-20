import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/u/ubm15l.css';
import '../../css/y/ydovum.css';
import '../../css/k/k50i_c.css';
import '../../css/g/g_9_ct.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/d/d-fbzv8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew ubm15l ydovum"/><path class="iw1iew k50i_c ydovum"/><path class="g_9_ct ydovum"/>`,
		"fallback": "line-md:file-download-twotone",
	});
}

export default Component;
