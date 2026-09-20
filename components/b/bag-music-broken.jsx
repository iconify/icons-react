import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vgdrhu2qc.css';
import '../../css/e/eetq4kbnf.css';
import '../../css/n/ney5_b6pk.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vgdrhu2qc"/><path class="eetq4kbnf"/><path class="ney5_b6pk"/><path class="buo1kubox"/></g>`,
		"fallback": "solar:bag-music-broken",
	});
}

export default Component;
