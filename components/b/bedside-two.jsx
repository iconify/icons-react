import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fghv1qb6b.css';
import '../../css/v/vtcx4tbpp.css';
import '../../css/i/iv925zzmn.css';
import '../../css/j/jcrlfrbgh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgtKiTdXu"><g class="aql7dnt-u"><path class="fghv1qb6b"/><path class="vtcx4tbpp"/><path clip-rule="evenodd" class="iv925zzmn"/><path class="jcrlfrbgh"/></g></mask></defs><path mask="url(#SVGgtKiTdXu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bedside-two",
	});
}

export default Component;
