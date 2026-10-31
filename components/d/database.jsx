import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ig1a11boh.css';
import '../../css/s/skle_u2dr.css';
import '../../css/q/qy_mz6bbl.css';
import '../../css/a/aulkhebiq.css';
import '../../css/x/xh3a0actj.css';
import '../../css/q/q8-lf6obq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ig1a11boh wm-shadow"/><path class="skle_u2dr wm-shadow"/><path class="qy_mz6bbl"/><path class="aulkhebiq"/><path class="xh3a0actj"/><path class="q8-lf6obq"/></g>`,
		"fallback": "withicons-brutal:database",
	});
}

export default Component;
