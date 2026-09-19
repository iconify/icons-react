import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a33qkl5tb.css';
import '../../css/t/tt-8rubjb.css';
import '../../css/i/i6fc0ub0z.css';
import '../../css/o/o583s-bfl.css';
import '../../css/x/xue57cp9s.css';
import '../../css/c/c__jvurrs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd9nNpdgY"><g class="ft5dv1b6b"><path class="a33qkl5tb"/><path class="tt-8rubjb"/><circle class="i6fc0ub0z"/><circle class="o583s-bfl"/><circle class="xue57cp9s"/><circle class="c__jvurrs"/></g></mask></defs><path mask="url(#SVGd9nNpdgY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cheese",
	});
}

export default Component;
