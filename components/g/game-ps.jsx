import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/avkjhg7eh.css';
import '../../css/a/aeyefqb0j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGanREEdZE"><g class="v3_i3wktz"><path class="avkjhg7eh"/><path class="aeyefqb0j"/></g></mask></defs><path mask="url(#SVGanREEdZE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:game-ps",
	});
}

export default Component;
