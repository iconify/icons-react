import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/u3duj4btg.css';
import '../../css/n/n_9y8hjgn.css';
import '../../css/n/nghxz4u4e.css';
import '../../css/g/g9n8qkblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="u3duj4btg"/><path class="n_9y8hjgn"/><path class="nghxz4u4e"/><path class="g9n8qkblw"/></g>`,
		"fallback": "streamline-sharp-color:browser-error",
	});
}

export default Component;
