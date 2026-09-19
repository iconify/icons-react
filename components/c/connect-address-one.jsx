import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hx-qo_bxx.css';
import '../../css/m/mes17gbuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGk2Kleni"><g class="aql7dnt-u"><path class="hx-qo_bxx"/><circle class="mes17gbuk"/></g></mask></defs><path mask="url(#SVGGk2Kleni)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:connect-address-one",
	});
}

export default Component;
