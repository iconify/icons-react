import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/txhjy5bum.css';
import '../../css/j/j7b_4jb0s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDZvEddeV"><g class="ufeehvblu"><path class="txhjy5bum"/><path class="j7b_4jb0s"/></g></mask></defs><path mask="url(#SVGDZvEddeV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cones",
	});
}

export default Component;
