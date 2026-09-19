import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ycfmajb5u.css';
import '../../css/j/jp36w24ae.css';
import '../../css/a/aa7k_sbzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXFzjkeVk"><g class="v3_i3wktz"><path class="ycfmajb5u"/><path class="jp36w24ae"/><path class="aa7k_sbzz"/></g></mask></defs><path mask="url(#SVGXFzjkeVk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:broadcast-radio",
	});
}

export default Component;
