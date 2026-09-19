import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nr6ltb85s.css';
import '../../css/q/q6-g7vdkb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHwHCXTDV"><g class="aql7dnt-u"><path clip-rule="evenodd" class="nr6ltb85s"/><path class="q6-g7vdkb"/></g></mask></defs><path mask="url(#SVGHwHCXTDV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:connect",
	});
}

export default Component;
