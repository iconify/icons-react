import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/p/p13u7bb9s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGah4NodOD"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="p13u7bb9s"/></g></mask></defs><path mask="url(#SVGah4NodOD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-protection",
	});
}

export default Component;
