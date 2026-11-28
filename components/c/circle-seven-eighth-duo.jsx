import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0y5sfx7z.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/v/vyiij5bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x0y5sfx7z"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="vyiij5bjv"/></g>`,
		"fallback": "iconaut:circle-seven-eighth-duo",
	});
}

export default Component;
