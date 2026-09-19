import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/ao9e7w7dq.css';
import '../../css/b/b3c2jhbey.css';
import '../../css/p/p_88yybnm.css';
import '../../css/q/qgwr9vbgn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcT46vdvh"><g class="v3_i3wktz"><path class="ao9e7w7dq"/><path class="b3c2jhbey"/><path class="p_88yybnm"/><path class="qgwr9vbgn"/></g></mask></defs><path mask="url(#SVGcT46vdvh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bookmark-three",
	});
}

export default Component;
