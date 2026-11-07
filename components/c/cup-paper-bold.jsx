import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq_6npb_q.css';
import '../../css/m/mkkiv_s3q.css';
import '../../css/d/d61yiac4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq_6npb_q"/><path class="mkkiv_s3q"/><path class="d61yiac4l"/>`,
		"fallback": "solar:cup-paper-bold",
	});
}

export default Component;
