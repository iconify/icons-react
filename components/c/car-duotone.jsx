import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfhfeibhb.css';
import '../../css/z/zndyzxb5r.css';
import '../../css/m/md49ci-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfhfeibhb"/><path class="zndyzxb5r"/><path class="md49ci-8q"/></g>`,
		"fallback": "lucide-extended:car-duotone",
	});
}

export default Component;
