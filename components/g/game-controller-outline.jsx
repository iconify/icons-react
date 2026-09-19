import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6nrxku1q.css';
import '../../css/x/xq8i1vblg.css';
import '../../css/j/j3gww53lz.css';
import '../../css/x/x-sooibuu.css';
import '../../css/r/r1xy2obod.css';
import '../../css/s/s_47o8ytx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6nrxku1q"/><circle class="xq8i1vblg"/><path class="j3gww53lz"/><circle class="x-sooibuu"/><circle class="r1xy2obod"/><path class="s_47o8ytx"/>`,
		"fallback": "ion:game-controller-outline",
	});
}

export default Component;
