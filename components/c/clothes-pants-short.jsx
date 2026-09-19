import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/ja1cdv5sd.css';
import '../../css/y/yy_8hdb4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGumOR0d8h"><g class="aql7dnt-u"><path class="ja1cdv5sd"/><path class="yy_8hdb4g"/></g></mask></defs><path mask="url(#SVGumOR0d8h)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-pants-short",
	});
}

export default Component;
