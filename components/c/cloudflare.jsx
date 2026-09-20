import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgkseabvl.css';
import '../../css/w/w702a-b9z.css';
import '../../css/f/f2c_ymbal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgkseabvl"/><path class="w702a-b9z"/><path class="f2c_ymbal"/>`,
		"fallback": "selfhst:cloudflare",
	});
}

export default Component;
