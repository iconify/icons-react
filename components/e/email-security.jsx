import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/b/bygzykb_g.css';
import '../../css/z/z78yszbru.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgESlaeXW"><g class="aql7dnt-u"><path class="qtgswnn4u"/><path class="bygzykb_g"/><path class="z78yszbru"/></g></mask></defs><path mask="url(#SVGgESlaeXW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:email-security",
	});
}

export default Component;
