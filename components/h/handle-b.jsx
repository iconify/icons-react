import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/e/eo9hd3bdj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu4ecWcln"><g class="aql7dnt-u"><circle class="a_ete1bey"/><path clip-rule="evenodd" class="eo9hd3bdj"/></g></mask></defs><path mask="url(#SVGu4ecWcln)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-b",
	});
}

export default Component;
