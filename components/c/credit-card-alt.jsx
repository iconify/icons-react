import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i04yw6bfv.css';
import '../../css/i/ifilulb6g.css';
import '../../css/b/b1ecs5fbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i04yw6bfv"/><path class="ifilulb6g"/><path class="b1ecs5fbx"/>`,
		"fallback": "bx:credit-card-alt",
	});
}

export default Component;
