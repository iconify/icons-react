import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ius3-6n0i.css';
import '../../css/s/srr8t7bum.css';
import '../../css/f/faq8qdvkq.css';
import '../../css/r/rneejsm5d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ius3-6n0i"/><path class="srr8t7bum"/><path class="faq8qdvkq"/><path class="rneejsm5d"/>`,
		"fallback": "ant-design:crown-twotone",
	});
}

export default Component;
