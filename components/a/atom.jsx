import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcmrdvhow.css';
import '../../css/h/hzunv164j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcmrdvhow"/><path class="hzunv164j"/>`,
		"fallback": "token:atom",
	});
}

export default Component;
