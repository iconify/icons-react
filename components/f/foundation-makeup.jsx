import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qa_qwtqtq.css';
import '../../css/r/roa4jsr0h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnBXfydfN"><g class="aql7dnt-u"><path class="qa_qwtqtq"/><path class="roa4jsr0h"/></g></mask></defs><path mask="url(#SVGnBXfydfN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:foundation-makeup",
	});
}

export default Component;
