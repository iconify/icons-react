import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sz9e8238f.css';
import '../../css/k/kxnbaldms.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoDnRsbqV"><g class="aql7dnt-u"><path class="sz9e8238f"/><path class="kxnbaldms"/></g></mask></defs><path mask="url(#SVGoDnRsbqV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:coat-hanger",
	});
}

export default Component;
