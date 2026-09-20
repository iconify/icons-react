import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gn6kwgdwh.css';
import '../../css/b/bkzaoxbhd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="gn6kwgdwh"/><path class="bkzaoxbhd"/></g>`,
		"fallback": "streamline:entertainment-music-note-1-music-audio-note",
	});
}

export default Component;
