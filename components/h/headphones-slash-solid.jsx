import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcc0w7qat.css';
import '../../css/a/aqwncob1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcc0w7qat"/><path class="aqwncob1j"/>`,
		"fallback": "sidekickicons:headphones-slash-solid",
	});
}

export default Component;
