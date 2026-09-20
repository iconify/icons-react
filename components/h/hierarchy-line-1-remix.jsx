import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpu_c0btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpu_c0btc"/>`,
		"fallback": "streamline-sharp:hierarchy-line-1-remix",
	});
}

export default Component;
