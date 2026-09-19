import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/ec0gfvblp.css';
import '../../css/d/dmn38-04c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh5btNbUu"><g class="wwvp95byt"><path class="ec0gfvblp"/><path class="dmn38-04c"/></g></mask></defs><path mask="url(#SVGh5btNbUu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:blossom",
	});
}

export default Component;
