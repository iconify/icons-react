import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtbad5h4g.css';
import '../../css/o/o3c7m2drk.css';
import '../../css/r/rdqn1-b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtbad5h4g"/><path class="o3c7m2drk"/><path class="rdqn1-b6x"/>`,
		"fallback": "streamline-freehand:home-chimney-2",
	});
}

export default Component;
