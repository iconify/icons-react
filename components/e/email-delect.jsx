import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/y/yxhlumb2n.css';
import '../../css/p/p1h0mh26u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbZygNbsA"><g class="aql7dnt-u"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="yxhlumb2n"/><path class="p1h0mh26u"/></g></mask></defs><path mask="url(#SVGbZygNbsA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:email-delect",
	});
}

export default Component;
