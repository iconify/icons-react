import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/s/s84s3qbyt.css';
import '../../css/g/ghlshv1ad.css';
import '../../css/u/ubu255tim.css';
import '../../css/w/wt6nnybjk.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="s84s3qbyt"/><path class="ghlshv1ad"/><path class="ubu255tim wm-shine"/><path class="wm-deco wt6nnybjk"/><path class="iqhjyybzt wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-image",
	});
}

export default Component;
