import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0isbdc3w.css';
import '../../css/s/sbr8f8bth.css';
import '../../css/x/xa-mz4bwm.css';
import '../../css/o/o37n6ybvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0isbdc3w"/><path class="sbr8f8bth"/><path class="xa-mz4bwm"/><path class="o37n6ybvv"/></g>`,
		"fallback": "streamline-ultimate-color:file-code",
	});
}

export default Component;
