import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw8_37u4i.css';
import '../../css/a/ahhctfrrt.css';
import '../../css/a/a1fpm9bcj.css';
import '../../css/v/vlq7ubbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qw8_37u4i"/><path class="ahhctfrrt"/><path class="a1fpm9bcj"/><path class="vlq7ubbqw"/></g>`,
		"fallback": "streamline-freehand-color:earpods-attention",
	});
}

export default Component;
