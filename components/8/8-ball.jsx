import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4p62tssf.css';
import '../../css/h/hvsefo_2t.css';
import '../../css/q/qo_dlfbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4p62tssf"/><path class="hvsefo_2t"/><path class="qo_dlfbns"/>`,
		"fallback": "boxicons:8-ball",
	});
}

export default Component;
