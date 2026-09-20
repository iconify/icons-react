import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhuikybji.css';
import '../../css/s/s3hbfpb2y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhuikybji"/><path clip-rule="evenodd" class="s3hbfpb2y"/>`,
		"fallback": "teenyicons:chatbot-solid",
	});
}

export default Component;
