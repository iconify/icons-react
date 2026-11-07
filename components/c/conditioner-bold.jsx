import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kug-ohb2i.css';
import '../../css/s/s78y6d9hi.css';
import '../../css/j/jdekhpbko.css';
import '../../css/d/d6wcrsuxf.css';
import '../../css/g/gn_cbwboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kug-ohb2i"/><path clip-rule="evenodd" class="s78y6d9hi"/><path clip-rule="evenodd" class="jdekhpbko"/><path clip-rule="evenodd" class="d6wcrsuxf"/><path class="gn_cbwboj"/>`,
		"fallback": "solar:conditioner-bold",
	});
}

export default Component;
