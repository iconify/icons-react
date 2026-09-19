import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o4fdh1b1f.css';
import '../../css/h/h05jvmbea.css';
import '../../css/i/il6_1tbws.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGStGRUdQJ"><g class="aql7dnt-u"><circle class="o4fdh1b1f"/><circle class="h05jvmbea"/><path class="il6_1tbws"/></g></mask></defs><path mask="url(#SVGStGRUdQJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:glasses",
	});
}

export default Component;
