import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug9dlpt4z.css';
import '../../css/v/vbcj9_ast.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIaqqgbgm"><g class="aql7dnt-u"><path class="ug9dlpt4z"/><path class="vbcj9_ast"/></g></mask></defs><path mask="url(#SVGIaqqgbgm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:airpods",
	});
}

export default Component;
