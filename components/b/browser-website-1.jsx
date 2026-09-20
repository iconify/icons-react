import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iio_dxbop.css';
import '../../css/r/r1udgjbvq.css';
import '../../css/g/gjcdhf15q.css';
import '../../css/m/mmcmppn7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="iio_dxbop"/><path class="r1udgjbvq"/><path class="gjcdhf15q"/><path class="mmcmppn7v"/></g>`,
		"fallback": "streamline-plump-color:browser-website-1",
	});
}

export default Component;
