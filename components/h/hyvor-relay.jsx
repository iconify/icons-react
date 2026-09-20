import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_1rlqbxe.css';
import '../../css/f/f14y7dbyr.css';
import '../../css/k/ktwj2bcgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_1rlqbxe"/><path class="f14y7dbyr"/><path class="ktwj2bcgu"/>`,
		"fallback": "selfhst:hyvor-relay",
	});
}

export default Component;
