import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mg6s-wbot.css';
import '../../css/c/chx26abuv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqkVAYbmy"><g class="aql7dnt-u"><circle class="mg6s-wbot"/><path class="chx26abuv"/></g></mask></defs><path mask="url(#SVGqkVAYbmy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:boy-two",
	});
}

export default Component;
