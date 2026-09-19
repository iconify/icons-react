import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/x_zrcymam.css';
import '../../css/i/i-es86b7f.css';
import '../../css/n/nuznabb2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="x_zrcymam"/><path class="i-es86b7f"/><path class="nuznabb2k"/></g>`,
		"fallback": "circle-flags:ec-w",
	});
}

export default Component;
