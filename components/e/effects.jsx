import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/epx73cr8l.css';
import '../../css/b/bi74qk6aa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8umZkbDS"><g class="aql7dnt-u"><path class="epx73cr8l"/><path class="bi74qk6aa"/></g></mask></defs><path mask="url(#SVG8umZkbDS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:effects",
	});
}

export default Component;
