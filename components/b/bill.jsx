import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j3b_636zs.css';
import '../../css/i/ilexycb4h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGt3U8lbzg"><g class="aql7dnt-u"><path class="j3b_636zs"/><path class="ilexycb4h"/></g></mask></defs><path mask="url(#SVGt3U8lbzg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bill",
	});
}

export default Component;
