import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/scm5a4buk.css';
import '../../css/y/yduyyjumo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAj7U8cvG"><g class="v3_i3wktz"><path class="scm5a4buk"/><path class="yduyyjumo"/></g></mask></defs><path mask="url(#SVGAj7U8cvG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clue",
	});
}

export default Component;
