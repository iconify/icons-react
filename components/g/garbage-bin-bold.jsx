import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssv2r9bnu.css';
import '../../css/o/o2pei4b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssv2r9bnu"/><path class="o2pei4b7t"/>`,
		"fallback": "streamline-ultimate:garbage-bin-bold",
	});
}

export default Component;
