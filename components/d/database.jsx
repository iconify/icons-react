import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/b7mrxw8pe.css';
import '../../css/c/cvm2rl1cd.css';
import '../../css/k/kjqtpnbjq.css';
import '../../css/f/fhobzotxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="b7mrxw8pe"/><path class="cvm2rl1cd"/><path class="kjqtpnbjq"/><path class="fhobzotxz"/></g>`,
		"fallback": "streamline-sharp-color:database",
	});
}

export default Component;
