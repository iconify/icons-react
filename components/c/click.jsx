import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nwbhzkbcg.css';
import '../../css/r/rr-2dhbyn.css';
import '../../css/c/c9-gn0brd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu7LnwcKL"><g class="aql7dnt-u"><path class="nwbhzkbcg"/><path clip-rule="evenodd" class="rr-2dhbyn"/><path class="c9-gn0brd"/></g></mask></defs><path mask="url(#SVGu7LnwcKL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:click",
	});
}

export default Component;
