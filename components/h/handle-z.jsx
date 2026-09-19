import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/o/o6o_kgbrk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOMDJUcJH"><g class="aql7dnt-u"><circle class="a_ete1bey"/><path class="o6o_kgbrk"/></g></mask></defs><path mask="url(#SVGOMDJUcJH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-z",
	});
}

export default Component;
