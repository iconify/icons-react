import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hcknoobta.css';
import '../../css/b/bu-51_byq.css';
import '../../css/y/yvjmprl1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKfHlW4su"><g class="v3_i3wktz"><path class="hcknoobta"/><path class="bu-51_byq"/><path class="yvjmprl1n"/></g></mask></defs><path mask="url(#SVGKfHlW4su)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:basketball-clothes",
	});
}

export default Component;
