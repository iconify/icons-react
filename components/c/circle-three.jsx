import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/a/aqezq3b2u.css';
import '../../css/g/go_3kbx3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVB2dqNmI"><g class="adexpl72i"><path class="aqezq3b2u"/><path clip-rule="evenodd" class="go_3kbx3s"/></g></mask></defs><path mask="url(#SVGVB2dqNmI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circle-three",
	});
}

export default Component;
