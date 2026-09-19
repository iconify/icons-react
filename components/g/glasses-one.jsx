import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p2f2uss-m.css';
import '../../css/q/qk_g53bfd.css';
import '../../css/o/ofgf3ebhn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi9bVbdFm"><g class="aql7dnt-u"><circle class="p2f2uss-m"/><circle transform="matrix(-1 0 0 1 33.5 24.5)" class="qk_g53bfd"/><path class="ofgf3ebhn"/></g></mask></defs><path mask="url(#SVGi9bVbdFm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:glasses-one",
	});
}

export default Component;
