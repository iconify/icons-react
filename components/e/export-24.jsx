import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ez0xyqh.css';
import '../../css/b/bnmfd8bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ez0xyqh"/><path class="bnmfd8bdw"/>`,
		"fallback": "qlementine-icons:export-24",
	});
}

export default Component;
