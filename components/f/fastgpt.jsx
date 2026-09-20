import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaw8lrbot.css';
import '../../css/b/bq40tibwo.css';
import '../../css/i/i0dfc_bsh.css';
import '../../css/d/d1sa1b83z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill="url(#SVGqI6hAbAH)" class="yaw8lrbot"/><path fill="url(#SVGqI6hAbAH)" class="bq40tibwo"/><defs><linearGradient id="SVGqI6hAbAH" x1="11.758" x2="11.758" y1="0" y2="24" gradientUnits="userSpaceOnUse"><stop class="i0dfc_bsh"/><stop offset="1" class="d1sa1b83z"/></linearGradient></defs>`,
		"fallback": "thesvg-color:fastgpt",
	});
}

export default Component;
