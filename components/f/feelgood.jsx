import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sgdy4u9pn.css';
import '../../css/e/euzfwrbhu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCATsPeGq"><g class="aql7dnt-u"><path class="sgdy4u9pn"/><path class="euzfwrbhu"/></g></mask></defs><path mask="url(#SVGCATsPeGq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:feelgood",
	});
}

export default Component;
