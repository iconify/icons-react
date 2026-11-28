import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f61dg8z5p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kn195jlxb.css';
import '../../css/e/e0m_55bwe.css';
import '../../css/o/oosjvp21t.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f61dg8z5p secondary"/><g class="dt0cm9dhy primary"><path class="kn195jlxb"/><path class="e0m_55bwe"/><path class="oosjvp21t"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:credit-card-off-duo",
	});
}

export default Component;
