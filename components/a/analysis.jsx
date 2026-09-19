import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dx6rcpb5j.css';
import '../../css/z/z-3ptvbim.css';
import '../../css/h/hxw676bki.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc7OC7EBX"><g class="rohhhzb0l"><path class="dx6rcpb5j"/><path class="z-3ptvbim"/><path class="hxw676bki"/></g></mask></defs><path mask="url(#SVGc7OC7EBX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:analysis",
	});
}

export default Component;
