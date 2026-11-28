import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i24p_w3hn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pg2o5sb4v.css';
import '../../css/g/g1x39jbgp.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i24p_w3hn secondary"/><g class="dt0cm9dhy primary"><path class="pg2o5sb4v"/><path class="g1x39jbgp"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:copy-off-duo",
	});
}

export default Component;
