import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr-s73b2l.css';
import '../../css/z/z82ok8llb.css';
import '../../css/c/c_6h8cous.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr-s73b2l"/><path class="z82ok8llb"/><path class="c_6h8cous"/>`,
		"fallback": "token:bdt",
	});
}

export default Component;
