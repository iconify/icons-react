import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/h/hb3z05bnj.css';
import '../../css/g/gqarr2b2o.css';
import '../../css/j/jvkleccvu.css';
import '../../css/h/hrm2qlbwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="hb3z05bnj"/><path class="gqarr2b2o"/><path class="jvkleccvu"/><path class="hrm2qlbwo"/></g>`,
		"fallback": "streamline-kameleon-color:hammer",
	});
}

export default Component;
