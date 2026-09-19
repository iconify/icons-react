import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4e4mlb2g.css';
import '../../css/y/y_tem0t5u.css';
import '../../css/u/ul1worher.css';
import '../../css/l/llqfild5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGecX1IdzB"><g class="u4e4mlb2g"><path class="y_tem0t5u"/><path class="ul1worher"/><path class="llqfild5y"/></g></mask></defs><path mask="url(#SVGecX1IdzB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baokemeng",
	});
}

export default Component;
