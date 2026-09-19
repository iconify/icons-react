import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fbo_5_dgq.css';
import '../../css/b/bcycd7i_s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG441SvbSD"><g class="aql7dnt-u"><path class="fbo_5_dgq"/><path class="bcycd7i_s"/></g></mask></defs><path mask="url(#SVG441SvbSD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:badge",
	});
}

export default Component;
