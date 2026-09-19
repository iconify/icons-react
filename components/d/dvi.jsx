import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qwi6hgibi.css';
import '../../css/v/vvao778zs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkTqsQtbP"><g class="aql7dnt-u"><path class="qwi6hgibi"/><path class="vvao778zs"/></g></mask></defs><path mask="url(#SVGkTqsQtbP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:dvi",
	});
}

export default Component;
