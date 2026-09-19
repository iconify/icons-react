import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fux8zqblx.css';
import '../../css/q/q1sc_2b4t.css';
import '../../css/w/w7g5_yhdp.css';
import '../../css/h/hk_6th-pz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYra3uiyH"><g class="ft5dv1b6b"><path class="fux8zqblx"/><path class="q1sc_2b4t"/><ellipse class="w7g5_yhdp"/><ellipse class="hk_6th-pz"/></g></mask></defs><path mask="url(#SVGYra3uiyH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:faceu",
	});
}

export default Component;
