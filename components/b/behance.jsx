import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rigs4yb3u.css';
import '../../css/i/idyp2ss1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="svgIDa"><g class="aql7dnt-u"><path clip-rule="evenodd" class="rigs4yb3u"/><path class="idyp2ss1r"/></g></mask><path mask="url(#svgIDa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:behance",
	});
}

export default Component;
