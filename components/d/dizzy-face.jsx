import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/g/gjp6m6bni.css';
import '../../css/x/x8lfubcau.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtIcbxdzu"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="gjp6m6bni"/><rect class="x8lfubcau"/></g></mask></defs><path mask="url(#SVGtIcbxdzu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:dizzy-face",
	});
}

export default Component;
