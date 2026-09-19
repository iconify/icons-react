import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/b/bt6y-5bmv.css';
import '../../css/b/bqfgnsbqv.css';
import '../../css/y/yi-i_vb8s.css';
import '../../css/w/wnbbxc35x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXS9Jrcif"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="bt6y-5bmv"/><circle class="bqfgnsbqv"/><path class="yi-i_vb8s"/><path class="wnbbxc35x"/></g></mask></defs><path mask="url(#SVGXS9Jrcif)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:death-star",
	});
}

export default Component;
