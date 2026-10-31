import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv__ntbgi.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/m/m3x6dbb0h.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv__ntbgi"/><path class="d1x_6zbkv"/><path class="m3x6dbb0h"/>`,
		"fallback": "tabler-flags:honduras",
	});
}

export default Component;
