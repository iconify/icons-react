import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5jxckb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5jxckb5q"><animateTransform attributeName="transform" attributeType="XML" dur="5s" from="360 12 12" repeatCount="indefinite" to="0 12 12" type="rotate"/></path>`,
		"fallback": "eos-icons:arrow-rotate",
	});
}

export default Component;
