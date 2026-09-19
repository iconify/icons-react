import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n30u93bfw.css';
import '../../css/d/ddp98ybow.css';
import '../../css/p/parmcdmdk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlVxLAbZJ"><g class="aql7dnt-u"><path class="n30u93bfw"/><path class="ddp98ybow"/><path class="parmcdmdk"/></g></mask></defs><path mask="url(#SVGlVxLAbZJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:backpack",
	});
}

export default Component;
