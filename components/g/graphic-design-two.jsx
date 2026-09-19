import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/br0c_qbar.css';
import '../../css/l/lxbxsbmqz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrJtsNe7M"><g class="aql7dnt-u"><path class="br0c_qbar"/><path clip-rule="evenodd" class="lxbxsbmqz"/></g></mask></defs><path mask="url(#SVGrJtsNe7M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:graphic-design-two",
	});
}

export default Component;
