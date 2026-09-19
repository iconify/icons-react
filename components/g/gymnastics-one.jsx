import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/p/p9pavjj4d.css';
import '../../css/l/ln6f3q98l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvq32Ydak"><g class="cgga7abld"><path class="p9pavjj4d"/><path class="ln6f3q98l"/></g></mask></defs><path mask="url(#SVGvq32Ydak)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gymnastics-one",
	});
}

export default Component;
