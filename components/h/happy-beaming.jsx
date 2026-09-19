import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm_qsybka.css';
import '../../css/w/wqbkv8u2i.css';
import '../../css/k/k66cgcc-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm_qsybka"/><path class="wqbkv8u2i"/><path class="k66cgcc-f"/>`,
		"fallback": "bx:happy-beaming",
	});
}

export default Component;
