import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en0_brpcp.css';
import '../../css/s/sx0whwb_m.css';
import '../../css/j/jnnkanbzp.css';
import '../../css/i/i_umbcdgk.css';
import '../../css/s/slwx9s0lo.css';
import '../../css/n/nfeshnb-t.css';
import '../../css/f/fyydeobbk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en0_brpcp"/><path class="sx0whwb_m"/><path class="jnnkanbzp"/><path class="i_umbcdgk"/><path class="slwx9s0lo"/><path class="nfeshnb-t"/><path class="fyydeobbk"/>`,
		"fallback": "tabler-flags:brazil",
	});
}

export default Component;
