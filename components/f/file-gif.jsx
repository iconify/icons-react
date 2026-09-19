import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w88ri53dc.css';
import '../../css/i/i0h_6ybcs.css';
import '../../css/e/etn0ud2ez.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w88ri53dc"/><path class="i0h_6ybcs"/><path class="etn0ud2ez"/>`,
		"fallback": "ant-design:file-gif",
	});
}

export default Component;
