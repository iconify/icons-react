import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vjps25b7w.css';
import '../../css/v/vg7mwkb0m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGw1hKdJF"><g class="rohhhzb0l"><path class="vjps25b7w"/><path class="vg7mwkb0m"/></g></mask></defs><path mask="url(#SVGGw1hKdJF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:icecream",
	});
}

export default Component;
