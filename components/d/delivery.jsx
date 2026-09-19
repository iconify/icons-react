import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hhhhlpzei.css';
import '../../css/i/i1m49fb9a.css';
import '../../css/e/egg-ivb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeELe5cKQ"><g class="aql7dnt-u"><path class="hhhhlpzei"/><path class="i1m49fb9a"/><path class="egg-ivb0a"/></g></mask></defs><path mask="url(#SVGeELe5cKQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delivery",
	});
}

export default Component;
