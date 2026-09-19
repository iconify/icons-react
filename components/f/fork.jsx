import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/l3gq4rh3k.css';
import '../../css/p/pfos4ebhf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaYjRbdkO"><g class="v3_i3wktz"><path class="l3gq4rh3k"/><path class="pfos4ebhf"/></g></mask></defs><path mask="url(#SVGaYjRbdkO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fork",
	});
}

export default Component;
