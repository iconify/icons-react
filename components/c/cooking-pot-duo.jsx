import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgkdjerzu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a89-7q1nu.css';
import '../../css/m/m87eqxblj.css';
import '../../css/f/fq3ef3b9g.css';
import '../../css/j/j0gmaqmew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tgkdjerzu"/><g class="dt0cm9dhy primary"><path class="a89-7q1nu"/><path class="m87eqxblj"/><path class="fq3ef3b9g"/><path class="j0gmaqmew"/></g>`,
		"fallback": "iconaut:cooking-pot-duo",
	});
}

export default Component;
