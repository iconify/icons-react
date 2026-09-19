import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opjpgxw-l.css';
import '../../css/l/liah705zk.css';
import '../../css/q/q9__elwgx.css';
import '../../css/q/q31a-k5ne.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opjpgxw-l"/><path class="liah705zk"/><path class="q9__elwgx"/><path class="q31a-k5ne"/>`,
		"fallback": "ant-design:container-twotone",
	});
}

export default Component;
