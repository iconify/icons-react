import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy_-6layx.css';
import '../../css/x/x6cgi8ycr.css';
import '../../css/d/dvztqvbzw.css';
import '../../css/o/odoq_dbzy.css';
import '../../css/m/m61wo2bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sy_-6layx"/><path class="x6cgi8ycr"/><path class="dvztqvbzw"/><path class="odoq_dbzy"/><path class="m61wo2bge"/></g>`,
		"fallback": "streamline-ultimate-color:harddrive-download-2",
	});
}

export default Component;
