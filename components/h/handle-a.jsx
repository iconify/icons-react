import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/s/sllri-5rx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmFjdGcaZ"><g class="aql7dnt-u"><circle class="a_ete1bey"/><path class="sllri-5rx"/></g></mask></defs><path mask="url(#SVGmFjdGcaZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-a",
	});
}

export default Component;
