import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k0phntbpf.css';
import '../../css/h/hdb5ivrwk.css';
import '../../css/g/g_i87xbuh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1AGYgdyd"><g class="aql7dnt-u"><path class="k0phntbpf"/><path class="hdb5ivrwk"/><path class="g_i87xbuh"/></g></mask></defs><path mask="url(#SVG1AGYgdyd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:castle",
	});
}

export default Component;
