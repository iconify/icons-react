import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5rh1hbct.css';
import '../../css/m/m98grhb7r.css';
import '../../css/a/aiwlczbmp.css';
import '../../css/p/pz33bbbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b5rh1hbct"/><path class="m98grhb7r"/><path class="aiwlczbmp"/><path class="pz33bbbdj"/></g>`,
		"fallback": "streamline-freehand-color:book-sound-audio",
	});
}

export default Component;
