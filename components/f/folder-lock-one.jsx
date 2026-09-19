import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oxacldbke.css';
import '../../css/j/j5rktsb5l.css';
import '../../css/a/aoz7iuonc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3H1OUbLg"><g class="aql7dnt-u"><path class="oxacldbke"/><path class="j5rktsb5l"/><path class="aoz7iuonc"/></g></mask></defs><path mask="url(#SVG3H1OUbLg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-lock-one",
	});
}

export default Component;
