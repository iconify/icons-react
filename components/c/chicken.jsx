import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tkm1l-bce.css';
import '../../css/y/youbn_grx.css';
import '../../css/t/tuojkhnts.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTPFSeb5s"><g class="aql7dnt-u"><path class="tkm1l-bce"/><path class="youbn_grx"/><path class="tuojkhnts"/></g></mask></defs><path mask="url(#SVGTPFSeb5s)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chicken",
	});
}

export default Component;
