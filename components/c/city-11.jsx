import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upijwtwan.css';
import '../../css/i/ia_5twbgd.css';
import '../../css/v/v7o1di81n.css';
import '../../css/m/mdp9pwg5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="upijwtwan"/><path class="ia_5twbgd"/><path class="v7o1di81n"/><path class="mdp9pwg5n"/></g>`,
		"fallback": "tdesign:city-11",
	});
}

export default Component;
