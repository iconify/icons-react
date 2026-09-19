import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bd8ephb8q.css';
import '../../css/g/gwpoo533p.css';
import '../../css/u/u65--k4ig.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGks21oeDl"><g class="ufeehvblu"><path class="bd8ephb8q"/><path class="gwpoo533p"/><path class="u65--k4ig"/></g></mask></defs><path mask="url(#SVGks21oeDl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:beer-mug",
	});
}

export default Component;
