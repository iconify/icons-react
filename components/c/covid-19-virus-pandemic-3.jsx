import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z2vq2lbgo.css';
import '../../css/u/une811siw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z2vq2lbgo"/><path class="une811siw"/></g>`,
		"fallback": "covid:covid-19-virus-pandemic-3",
	});
}

export default Component;
