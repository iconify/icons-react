import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpzg3ybjx.css';
import '../../css/q/qvb9z6b-w.css';
import '../../css/i/i5_-be20c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpzg3ybjx"/><path class="qvb9z6b-w"/><path class="i5_-be20c"/>`,
		"fallback": "streamline-freehand:composition-16-to-9",
	});
}

export default Component;
