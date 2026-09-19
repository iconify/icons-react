import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/g7m1m763r.css';
import '../../css/b/bqvh2xbzc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3kdFIerk"><g class="v3_i3wktz"><path class="g7m1m763r"/><path class="bqvh2xbzc"/></g></mask></defs><path mask="url(#SVG3kdFIerk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:branch",
	});
}

export default Component;
