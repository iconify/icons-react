import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3h4-wb4f.css';
import '../../css/p/pym4kbd7y.css';
import '../../css/i/ii3um__kf.css';
import '../../css/w/wyg38yjeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3h4-wb4f"/><path class="pym4kbd7y"/><path class="ii3um__kf"/><path class="wyg38yjeo"/></g>`,
		"fallback": "streamline-cyber-color:car-4",
	});
}

export default Component;
