import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rq-hfbc3v.css';
import '../../css/l/ljsyardgv.css';
import '../../css/i/i-oj57g7w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG14vxmeWP"><g class="aql7dnt-u"><path class="rq-hfbc3v"/><path class="ljsyardgv"/><path class="i-oj57g7w"/></g></mask></defs><path mask="url(#SVG14vxmeWP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drone",
	});
}

export default Component;
