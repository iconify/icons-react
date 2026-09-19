import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cfoowrbmd.css';
import '../../css/k/k6sx21i-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeet8hdch"><g class="aql7dnt-u"><path class="cfoowrbmd"/><path class="k6sx21i-s"/></g></mask></defs><path mask="url(#SVGeet8hdch)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:booth",
	});
}

export default Component;
