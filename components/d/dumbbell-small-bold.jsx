import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy0dji3-w.css';
import '../../css/o/o5dx87whx.css';
import '../../css/c/c5kg7bbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy0dji3-w"/><path class="o5dx87whx"/><path class="c5kg7bbtg"/>`,
		"fallback": "solar:dumbbell-small-bold",
	});
}

export default Component;
