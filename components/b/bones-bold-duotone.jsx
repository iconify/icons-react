import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/j/jcknlfbhs.css';
import '../../css/j/jn4idmyju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="jcknlfbhs"/><path class="jn4idmyju"/>`,
		"fallback": "solar:bones-bold-duotone",
	});
}

export default Component;
