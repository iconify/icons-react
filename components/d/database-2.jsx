import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnl-gqbew.css';
import '../../css/n/nonwbwmmw.css';
import '../../css/u/uq49ljb0l.css';
import '../../css/e/ec4m2xbjh.css';
import '../../css/v/v4ynd4b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hnl-gqbew"/><path class="nonwbwmmw"/><path class="uq49ljb0l"/><path class="ec4m2xbjh"/><path class="v4ynd4b8y"/></g>`,
		"fallback": "streamline-ultimate-color:database-2",
	});
}

export default Component;
