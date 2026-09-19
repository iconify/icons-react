import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhmqpzncy.css';
import '../../css/x/xu8t15bjf.css';
import '../../css/z/zboiubcgk.css';
import '../../css/x/xnhmzobai.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhmqpzncy"/><path class="xu8t15bjf"/><path class="zboiubcgk"/><path class="xnhmzobai"/>`,
		"fallback": "devicon:android-wordmark",
	});
}

export default Component;
