import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bemidachf.css';
import '../../css/g/g2xclxbug.css';
import '../../css/b/bt34uhgkb.css';
import '../../css/g/gzqs1_b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bemidachf wm-deco"/><path class="g2xclxbug wm-deco"/><path class="bt34uhgkb"/><path class="gzqs1_b0g"/></g>`,
		"fallback": "withicons:audio-waveform-blueprint",
	});
}

export default Component;
