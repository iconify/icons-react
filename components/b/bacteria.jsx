import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3c6gbc6d.css';
import '../../css/s/smab06bev.css';
import '../../css/y/yp9v_go7o.css';
import '../../css/f/fysm85xqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3c6gbc6d"/><path class="smab06bev"/><path class="yp9v_go7o"/><path class="fysm85xqe"/></g>`,
		"fallback": "streamline-cyber-color:bacteria",
	});
}

export default Component;
