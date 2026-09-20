import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssduyhgbk.css';
import '../../css/k/ktcdaovuf.css';
import '../../css/m/mwuopsbdz.css';
import '../../css/v/v2j0phshp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssduyhgbk"/><path class="ktcdaovuf"/><path class="mwuopsbdz"/><path class="v2j0phshp"/>`,
		"fallback": "lets-icons:full",
	});
}

export default Component;
