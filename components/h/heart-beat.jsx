import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5bbsjbhu.css';
import '../../css/v/vriw58bre.css';
import '../../css/h/hgr57bc5k.css';
import '../../css/o/o-xlspb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5bbsjbhu"/><path class="vriw58bre"/><path class="hgr57bc5k"/><path class="o-xlspb3m"/></g>`,
		"fallback": "streamline-cyber-color:heart-beat",
	});
}

export default Component;
