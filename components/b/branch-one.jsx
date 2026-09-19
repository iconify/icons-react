import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b8cd-f9hp.css';
import '../../css/k/kzptuhikc.css';
import '../../css/d/d8x3xzbpj.css';
import '../../css/y/yr5k3xbui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSHsbMe7A"><g class="aql7dnt-u"><path class="b8cd-f9hp"/><path class="kzptuhikc"/><path class="d8x3xzbpj"/><path class="yr5k3xbui"/></g></mask></defs><path mask="url(#SVGSHsbMe7A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:branch-one",
	});
}

export default Component;
