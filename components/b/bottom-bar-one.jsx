import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfvra_tsh.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5B2KGOku"><path class="gfvra_tsh"/></mask></defs><path mask="url(#SVG5B2KGOku)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:bottom-bar-one",
	});
}

export default Component;
