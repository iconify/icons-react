import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/noua3z6jc.css';
import '../../css/t/tqncmkbeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5t3VEzWz"><g class="v3_i3wktz"><path class="noua3z6jc"/><path class="tqncmkbeo"/></g></mask></defs><path mask="url(#SVG5t3VEzWz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:desk-lamp-one",
	});
}

export default Component;
