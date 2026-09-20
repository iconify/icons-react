import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qit1y2bjj.css';
import '../../css/m/mlq8elbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qit1y2bjj"/><path class="mlq8elbdw"/>`,
		"fallback": "tdesign:dart-board-filled",
	});
}

export default Component;
