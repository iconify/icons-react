import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l2pb8ibam.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';
import '../../css/k/k52rupvjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l2pb8ibam"/><path class="xl-jlp1rp"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/><path class="k52rupvjk"/></g>`,
		"fallback": "solar:case-round-minimalistic-line-duotone",
	});
}

export default Component;
