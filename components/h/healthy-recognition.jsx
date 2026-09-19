import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rm8wk1b8h.css';
import '../../css/l/lxnreqban.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrcy0SrOm"><g class="aql7dnt-u"><path class="rm8wk1b8h"/><path class="lxnreqban"/></g></mask></defs><path mask="url(#SVGrcy0SrOm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:healthy-recognition",
	});
}

export default Component;
