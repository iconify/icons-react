import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/r/r5gdt20zo.css';
import '../../css/y/ysj0g4nkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="r5gdt20zo"/><path class="ysj0g4nkf"/></g>`,
		"fallback": "streamline-cyber:day-storm-1",
	});
}

export default Component;
