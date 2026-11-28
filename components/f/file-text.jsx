import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/li6-bgbll.css';
import '../../css/w/w0crhbbtq.css';
import '../../css/g/gbz97_bij.css';
import '../../css/j/jdnkyut0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="li6-bgbll"/><path class="w0crhbbtq"/><path class="gbz97_bij"/><path class="jdnkyut0y"/></g>`,
		"fallback": "iconaut:file-text",
	});
}

export default Component;
