import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uewmtb75p.css';
import '../../css/k/kna-2skoh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuqqBkdsV"><g class="ft5dv1b6b"><path class="uewmtb75p"/><path class="kna-2skoh"/></g></mask></defs><path mask="url(#SVGuqqBkdsV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:basketball-one",
	});
}

export default Component;
