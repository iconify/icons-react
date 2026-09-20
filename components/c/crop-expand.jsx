import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i2iz81xau.css';
import '../../css/y/ywuzefbfo.css';
import '../../css/z/zbjo2in3u.css';
import '../../css/b/brt2ttvoc.css';
import '../../css/h/h7qa06noh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i2iz81xau"/><path class="ywuzefbfo"/><path class="zbjo2in3u"/><path class="brt2ttvoc"/><path class="h7qa06noh"/></g>`,
		"fallback": "streamline-freehand-color:crop-expand",
	});
}

export default Component;
