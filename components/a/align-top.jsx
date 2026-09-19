import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jaf5_5_-y.css';
import '../../css/y/y7o7wybuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3euSodfK"><g class="v3_i3wktz"><path class="jaf5_5_-y"/><path class="y7o7wybuc"/></g></mask></defs><path mask="url(#SVG3euSodfK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-top",
	});
}

export default Component;
