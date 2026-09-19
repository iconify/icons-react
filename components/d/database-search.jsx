import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lcee_744z.css';
import '../../css/q/quqne-byv.css';
import '../../css/b/bs8yxcb2i.css';
import '../../css/h/hya04gyiz.css';
import '../../css/r/r0bva1bcw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAHTrygRZ"><g class="aql7dnt-u"><path class="lcee_744z"/><path class="quqne-byv"/><path class="bs8yxcb2i"/><path class="hya04gyiz"/><path class="r0bva1bcw"/></g></mask></defs><path mask="url(#SVGAHTrygRZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:database-search",
	});
}

export default Component;
