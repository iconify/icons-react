import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1w5x4bwa.css';
import '../../css/x/x46jw6bcn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1w5x4bwa"/><path class="x46jw6bcn"/>`,
		"fallback": "devicon:erlang-wordmark",
	});
}

export default Component;
