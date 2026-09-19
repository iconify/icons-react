import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jsnid3b6z.css';
import '../../css/i/ipid2bc2q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGno3fQqos"><g class="aql7dnt-u"><path class="jsnid3b6z"/><path class="ipid2bc2q"/></g></mask></defs><path mask="url(#SVGno3fQqos)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:afro-pick",
	});
}

export default Component;
