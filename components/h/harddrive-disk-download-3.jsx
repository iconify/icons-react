import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mppcllbzf.css';
import '../../css/h/hcu6waccn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mppcllbzf"/><path class="hcu6waccn"/></g>`,
		"fallback": "streamline-cyber:harddrive-disk-download-3",
	});
}

export default Component;
