import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hjyi-2bwz.css';
import '../../css/q/qdo1ibc6u.css';
import '../../css/a/amaijkbru.css';
import '../../css/v/voz8m8_db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hjyi-2bwz"/><path class="qdo1ibc6u"/><path class="amaijkbru"/><path class="voz8m8_db"/></g>`,
		"fallback": "streamline-freehand-color:disability-service-dog",
	});
}

export default Component;
