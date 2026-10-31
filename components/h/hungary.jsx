import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/s/s4vfm1orq.css';
import '../../css/n/nm2s24x-y.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="s4vfm1orq"/><path class="nm2s24x-y"/>`,
		"fallback": "tabler-flags:hungary",
	});
}

export default Component;
