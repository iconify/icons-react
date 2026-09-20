import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8m1zib7f.css';
import '../../css/s/s3il34blq.css';
import '../../css/h/hiuyf2hbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8m1zib7f"/><path class="s3il34blq"/><path class="hiuyf2hbq"/>`,
		"fallback": "streamline-ultimate:common-file-stack-bold",
	});
}

export default Component;
