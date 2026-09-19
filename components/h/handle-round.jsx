import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/r/r3z32eb1y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG17QvlwOc"><g class="aql7dnt-u"><circle class="a_ete1bey"/><circle class="r3z32eb1y"/></g></mask></defs><path mask="url(#SVG17QvlwOc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-round",
	});
}

export default Component;
