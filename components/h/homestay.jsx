import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rrrrw5wgk.css';
import '../../css/z/za9agtufe.css';
import '../../css/b/b44haw56m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgN3MhdIM"><g class="aql7dnt-u"><path class="rrrrw5wgk"/><path class="za9agtufe"/><path class="b44haw56m"/></g></mask></defs><path mask="url(#SVGgN3MhdIM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:homestay",
	});
}

export default Component;
