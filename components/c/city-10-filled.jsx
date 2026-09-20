import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg2mv0bwm.css';
import '../../css/x/x9xdhqbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg2mv0bwm"/><path class="x9xdhqbvs"/>`,
		"fallback": "tdesign:city-10-filled",
	});
}

export default Component;
