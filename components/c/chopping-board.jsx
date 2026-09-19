import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/am-v96rjj.css';
import '../../css/z/zp9ikpfsf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY02aebEh"><g class="aql7dnt-u"><path class="am-v96rjj"/><path class="zp9ikpfsf"/></g></mask></defs><path mask="url(#SVGY02aebEh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chopping-board",
	});
}

export default Component;
