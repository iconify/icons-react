import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-vlo5b_t.css';
import '../../css/g/gpx85eb-n.css';
import '../../css/m/m7t4xqbqx.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-vlo5b_t"/><path class="gpx85eb-n"/><path class="m7t4xqbqx"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-video-camera-bold-duotone",
	});
}

export default Component;
