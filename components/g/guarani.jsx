import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wqbbqwb-i.css';
import '../../css/m/mwx-_uq8u.css';
import '../../css/e/e5_fwcbum.css';
import '../../css/q/qayroobql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wqbbqwb-i"/><path class="mwx-_uq8u"/><path class="e5_fwcbum"/><path class="qayroobql"/></g>`,
		"fallback": "circle-flags:guarani",
	});
}

export default Component;
