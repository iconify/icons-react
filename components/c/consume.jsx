import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sp1hiv_iz.css';
import '../../css/b/btaqqpbbe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbvWtubWN"><g class="v3_i3wktz"><path class="sp1hiv_iz"/><path class="btaqqpbbe"/></g></mask></defs><path mask="url(#SVGbvWtubWN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:consume",
	});
}

export default Component;
