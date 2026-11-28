import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiaedibfv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dca2urprn.css';
import '../../css/t/t-hhzbcli.css';
import '../../css/n/np8nxgbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xiaedibfv"/><g class="dt0cm9dhy primary"><path class="dca2urprn"/><path class="t-hhzbcli"/><path class="np8nxgbar"/></g>`,
		"fallback": "iconaut:doorbell-duo",
	});
}

export default Component;
