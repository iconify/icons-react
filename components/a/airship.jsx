import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2c87wb0k.css';
import '../../css/s/s0gpikbzf.css';
import '../../css/a/awmnfdi-j.css';
import '../../css/l/lhtcd4bcc.css';
import '../../css/u/u6fqh2b5c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p2c87wb0k"/><path clip-rule="evenodd" class="s0gpikbzf"/><path class="awmnfdi-j"/><path class="lhtcd4bcc"/><path class="u6fqh2b5c"/></g>`,
		"fallback": "streamline-flex-color:airship",
	});
}

export default Component;
