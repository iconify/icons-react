import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/q/qpk4e4bam.css';
import '../../css/v/vey9icbjg.css';
import '../../css/n/n7aax--_u.css';
import '../../css/m/m2jvxebyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="qpk4e4bam"/><path class="vey9icbjg"/><path class="n7aax--_u"/><path class="m2jvxebyz"/></g>`,
		"fallback": "streamline-cyber:camera-user",
	});
}

export default Component;
