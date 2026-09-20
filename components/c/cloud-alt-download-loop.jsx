import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl247z.css';
import '../../css/w/w88kfe.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';
import '../../css/d/d-escncg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl247z"/><path class="w88kfe"/>`,
		"fallback": "line-md:cloud-alt-download-loop",
	});
}

export default Component;
