import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxyv9z9mh.css';
import '../../css/g/gmtt25bwa.css';
import '../../css/k/kh__y6vsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="yxyv9z9mh"><path class="gmtt25bwa"/><path class="kh__y6vsi"/></g>`,
		"fallback": "streamline-cyber-color:gender-male-female",
	});
}

export default Component;
