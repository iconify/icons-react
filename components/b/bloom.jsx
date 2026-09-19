import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mi53ns-dt.css';
import '../../css/w/w-web3b5l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtDPMgbrM"><g class="aql7dnt-u"><path class="mi53ns-dt"/><path class="w-web3b5l"/></g></mask></defs><path mask="url(#SVGtDPMgbrM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bloom",
	});
}

export default Component;
