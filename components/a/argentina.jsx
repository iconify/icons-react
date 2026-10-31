import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/q/qiwo0-boc.css';
import '../../css/f/f3g2acb4q.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="qiwo0-boc"/><path class="f3g2acb4q"/>`,
		"fallback": "tabler-flags:argentina",
	});
}

export default Component;
