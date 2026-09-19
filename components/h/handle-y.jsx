import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/h/h1tyujb9b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyAlWTdTh"><g class="aql7dnt-u"><circle class="a_ete1bey"/><path class="h1tyujb9b"/></g></mask></defs><path mask="url(#SVGyAlWTdTh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-y",
	});
}

export default Component;
