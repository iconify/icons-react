import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uzp-9v4km.css';
import '../../css/j/jb1pa2bvo.css';
import '../../css/i/ij785dbcr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnTGjXbYS"><g class="aql7dnt-u"><path class="uzp-9v4km"/><path class="jb1pa2bvo"/><path class="ij785dbcr"/></g></mask></defs><path mask="url(#SVGnTGjXbYS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gold-medal",
	});
}

export default Component;
