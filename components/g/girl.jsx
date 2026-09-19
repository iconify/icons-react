import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mg6s-wbot.css';
import '../../css/r/r1k7lebmh.css';
import '../../css/u/uettqb7vg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIbtuRbIO"><g class="aql7dnt-u"><circle class="mg6s-wbot"/><path class="r1k7lebmh"/><path class="uettqb7vg"/></g></mask></defs><path mask="url(#SVGIbtuRbIO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:girl",
	});
}

export default Component;
