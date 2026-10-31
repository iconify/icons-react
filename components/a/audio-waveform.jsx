import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kjrzx5bmv.css';
import '../../css/p/pxw44dr5y.css';
import '../../css/r/r7p23bc9z.css';
import '../../css/f/fm6rnqb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kjrzx5bmv wm-shadow"/><path class="pxw44dr5y wm-shadow"/><path class="r7p23bc9z"/><path class="fm6rnqb2m"/></g>`,
		"fallback": "withicons-brutal:audio-waveform",
	});
}

export default Component;
