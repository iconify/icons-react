import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ifxv5jnsx.css';
import '../../css/m/m9g0m504h.css';
import '../../css/s/s91atubcm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAekilOfB"><g class="aql7dnt-u"><rect class="ifxv5jnsx"/><path class="m9g0m504h"/><path class="s91atubcm"/></g></mask></defs><path mask="url(#SVGAekilOfB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:air-conditioning",
	});
}

export default Component;
