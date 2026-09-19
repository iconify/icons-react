import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/a/a358q0xfm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIMeHvGGe"><g class="adexpl72i"><circle class="bshyy_b6k"/><path class="a358q0xfm"/></g></mask></defs><path mask="url(#SVGIMeHvGGe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:boy-one",
	});
}

export default Component;
