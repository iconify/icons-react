import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vi1h83lon.css';
import '../../css/w/wktsztbxm.css';
import '../../css/z/zaa5pgbte.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="vi1h83lon"/><path class="wktsztbxm"/><path class="zaa5pgbte"/></g>`,
		"fallback": "circle-flags:be",
	});
}

export default Component;
