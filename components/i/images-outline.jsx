import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyadontyn.css';
import '../../css/z/z8rxepbkv.css';
import '../../css/k/kgn0a9bzn.css';
import '../../css/p/ppvvrsbcd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyadontyn"/><rect class="z8rxepbkv"/><ellipse class="kgn0a9bzn"/><path class="ppvvrsbcd"/>`,
		"fallback": "ion:images-outline",
	});
}

export default Component;
