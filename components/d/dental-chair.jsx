import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l5j9-ib-z.css';
import '../../css/y/y-6zsymla.css';
import '../../css/l/l0p3x0uhv.css';
import '../../css/s/s6hztnhpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l5j9-ib-z"/><path class="wm-k y-6zsymla"/><path class="l0p3x0uhv wm-a"/><path class="s6hztnhpp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dental-chair",
	});
}

export default Component;
