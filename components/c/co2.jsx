import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9p9j04rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9p9j04rx"/>`,
		"fallback": "cbi:co2",
	});
}

export default Component;
