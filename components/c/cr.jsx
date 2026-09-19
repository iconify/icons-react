import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v3at201ox.css';
import '../../css/t/tnp2i7bvy.css';
import '../../css/b/bi6bn9t7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="v3at201ox"/><path class="tnp2i7bvy"/><path class="bi6bn9t7y"/></g>`,
		"fallback": "circle-flags:cr",
	});
}

export default Component;
