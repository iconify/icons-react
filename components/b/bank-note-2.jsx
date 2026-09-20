import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pcl356uns.css';
import '../../css/d/d9f9t572w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="pcl356uns"/><path class="d9f9t572w"/></g>`,
		"fallback": "streamline-cyber:bank-note-2",
	});
}

export default Component;
