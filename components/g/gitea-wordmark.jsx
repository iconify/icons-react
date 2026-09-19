import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owpy5-7fq.css';
import '../../css/q/q6421ib4p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owpy5-7fq st1"/><path class="q6421ib4p"/>`,
		"fallback": "devicon:gitea-wordmark",
	});
}

export default Component;
