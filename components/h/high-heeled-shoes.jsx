import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mnzhnhbdm.css';
import '../../css/i/iehr1opfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWhrNKdWS"><g class="aql7dnt-u"><path class="mnzhnhbdm"/><path class="iehr1opfa"/></g></mask></defs><path mask="url(#SVGWhrNKdWS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:high-heeled-shoes",
	});
}

export default Component;
