import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wrhmw8bod.css';
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
		"content": `<defs><mask id="SVGtLx6gcYu"><g class="aql7dnt-u"><path class="wrhmw8bod"/><circle class="mes17gbuk"/></g></mask></defs><path mask="url(#SVGtLx6gcYu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:connect-address-two",
	});
}

export default Component;
