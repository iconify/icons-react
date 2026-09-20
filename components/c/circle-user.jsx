import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/n/nme-2opxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><circle class="zv6cqnbnp"/><path class="nme-2opxg"/></g>`,
		"fallback": "lucide:circle-user",
	});
}

export default Component;
