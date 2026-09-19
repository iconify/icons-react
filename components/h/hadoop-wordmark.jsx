import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls7jih8rq.css';
import '../../css/e/e3kiwlbcj.css';
import '../../css/l/l6yac9etg.css';
import '../../css/o/o5edsp6ri.css';
import '../../css/t/t3e8_2b7q.css';
import '../../css/b/b0xj-0leu.css';
import '../../css/g/gwy4r2b2l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls7jih8rq"/><path class="e3kiwlbcj"/><path class="l6yac9etg"/><path class="o5edsp6ri"/><path class="t3e8_2b7q"/><path class="b0xj-0leu"/><path class="gwy4r2b2l"/>`,
		"fallback": "devicon:hadoop-wordmark",
	});
}

export default Component;
