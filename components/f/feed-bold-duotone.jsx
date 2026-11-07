import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmxpybrsb.css';
import '../../css/n/nghpb3cka.css';
import '../../css/u/uq14z1bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmxpybrsb"/><path class="nghpb3cka"/><path class="uq14z1bmm"/>`,
		"fallback": "solar:feed-bold-duotone",
	});
}

export default Component;
