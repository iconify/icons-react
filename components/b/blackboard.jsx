import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/lo2azab8w.css';
import '../../css/s/swzcsov6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAOTGHdEW"><g class="v3_i3wktz"><path class="lo2azab8w"/><path class="swzcsov6m"/></g></mask></defs><path mask="url(#SVGAOTGHdEW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:blackboard",
	});
}

export default Component;
