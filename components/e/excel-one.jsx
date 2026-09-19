import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/d/dkty4hkoy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsYVqsbct"><g class="rohhhzb0l"><rect class="h9qj9o6mz"/><path class="dkty4hkoy"/></g></mask></defs><path mask="url(#SVGsYVqsbct)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:excel-one",
	});
}

export default Component;
