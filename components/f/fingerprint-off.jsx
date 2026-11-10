import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbnjg2bxi.css';
import '../../css/s/s5xnmdbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pbnjg2bxi"/><path class="s5xnmdbdq"/></g>`,
		"fallback": "andrsrxn:fingerprint-off",
	});
}

export default Component;
