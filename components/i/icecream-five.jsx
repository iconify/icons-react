import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y808m-bqg.css';
import '../../css/f/fr0tverdm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyR3vmdbA"><g class="rohhhzb0l"><path class="y808m-bqg"/><path class="fr0tverdm"/></g></mask></defs><path mask="url(#SVGyR3vmdbA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:icecream-five",
	});
}

export default Component;
