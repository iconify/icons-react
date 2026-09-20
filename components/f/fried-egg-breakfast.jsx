import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq-cnebof.css';
import '../../css/d/den8tnbku.css';
import '../../css/u/uztgjzbkg.css';
import '../../css/w/wwxponb6w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gq-cnebof"/><path class="den8tnbku"/><path class="uztgjzbkg"/><path class="wwxponb6w"/></g>`,
		"fallback": "streamline-flex-color:fried-egg-breakfast",
	});
}

export default Component;
