import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wzn-hq2qa.css';
import '../../css/g/g8apx9wrt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs8VRhd4H"><g class="aql7dnt-u"><path class="wzn-hq2qa"/><path class="g8apx9wrt"/></g></mask></defs><path mask="url(#SVGs8VRhd4H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:comment-one",
	});
}

export default Component;
