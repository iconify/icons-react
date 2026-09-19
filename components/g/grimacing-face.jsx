import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/f/f6mlyysyg.css';
import '../../css/k/kibya8bld.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGa0WlYb0M"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="f6mlyysyg"/><rect class="kibya8bld"/></g></mask></defs><path mask="url(#SVGa0WlYb0M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:grimacing-face",
	});
}

export default Component;
