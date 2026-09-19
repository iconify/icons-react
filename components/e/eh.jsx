import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/thr1nx8vi.css';
import '../../css/b/b5_d2kbgp.css';
import '../../css/m/mc4217btw.css';
import '../../css/b/bffubcecu.css';
import '../../css/k/kzqdr-bzo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="thr1nx8vi"/><path class="b5_d2kbgp"/><path class="mc4217btw"/><path class="bffubcecu"/><path class="kzqdr-bzo"/></g>`,
		"fallback": "circle-flags:eh",
	});
}

export default Component;
