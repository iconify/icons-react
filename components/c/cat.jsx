import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1sqy38ml.css';
import '../../css/u/u1u-os4ws.css';
import '../../css/b/b0fe4tbca.css';
import '../../css/f/fkadcub_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1sqy38ml"/><path class="u1u-os4ws"/><path class="b0fe4tbca"/><path class="fkadcub_o"/>`,
		"fallback": "fxemoji:cat",
	});
}

export default Component;
