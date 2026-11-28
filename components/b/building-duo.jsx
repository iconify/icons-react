import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixg1tmtgv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tfazt4b9n.css';
import '../../css/t/tuuqhnbvj.css';
import '../../css/t/tgej6jbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixg1tmtgv secondary"/><g class="dt0cm9dhy primary"><path class="tfazt4b9n"/><path class="tuuqhnbvj"/><path class="tgej6jbmt"/></g>`,
		"fallback": "iconaut:building-duo",
	});
}

export default Component;
