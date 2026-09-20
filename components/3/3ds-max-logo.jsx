import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p5-1p8o8f.css';
import '../../css/k/kj1x77bdk.css';
import '../../css/k/k94siob2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="p5-1p8o8f"/><path class="kj1x77bdk"/><path class="k94siob2n"/></g>`,
		"fallback": "streamline-logos:3ds-max-logo",
	});
}

export default Component;
