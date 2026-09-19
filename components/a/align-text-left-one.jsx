import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/l/lewr2fakh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLQJvNbzm"><g class="v3_i3wktz"><path class="ua-z8vb0h"/><path class="lewr2fakh"/></g></mask></defs><path mask="url(#SVGLQJvNbzm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-text-left-one",
	});
}

export default Component;
