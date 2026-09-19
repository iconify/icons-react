import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxofds--v.css';
import '../../css/s/s310mjyrf.css';
import '../../css/g/ghnp_db6s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxofds--v"/><path class="s310mjyrf"/><path class="ghnp_db6s"/>`,
		"fallback": "ant-design:folder-add-twotone",
	});
}

export default Component;
