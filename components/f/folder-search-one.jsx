import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/p/pm3iujbxt.css';
import '../../css/y/y_awv3s8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEY4swbGg"><g class="rohhhzb0l"><path class="rjn-u5bcv"/><circle class="pm3iujbxt"/><path class="y_awv3s8j"/></g></mask></defs><path mask="url(#SVGEY4swbGg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-search-one",
	});
}

export default Component;
