import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fsgtypbca.css';
import '../../css/v/v_wo-cb6y.css';
import '../../css/b/ba9iqk-jv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0DQZEpmh"><g class="v3_i3wktz"><path class="fsgtypbca"/><path class="v_wo-cb6y"/><path class="ba9iqk-jv"/></g></mask></defs><path mask="url(#SVG0DQZEpmh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bank-card-two",
	});
}

export default Component;
