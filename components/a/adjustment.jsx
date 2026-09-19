import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j_kur7b9h.css';
import '../../css/b/b7hyc3bxm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5JU22pXT"><g class="wwvp95byt"><path class="j_kur7b9h"/><path class="b7hyc3bxm"/></g></mask></defs><path mask="url(#SVG5JU22pXT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:adjustment",
	});
}

export default Component;
