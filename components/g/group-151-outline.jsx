import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfdi3-zsx.css';
import '../../css/l/lvrxp9btv.css';
import '../../css/j/jkhrtccjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfdi3-zsx"/><path class="lvrxp9btv"/><path clip-rule="evenodd" class="jkhrtccjt"/>`,
		"fallback": "basil:group-151-outline",
	});
}

export default Component;
