import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6tz7dfgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6tz7dfgw"/>`,
		"fallback": "streamline:ai-chip-spark-solid",
	});
}

export default Component;
